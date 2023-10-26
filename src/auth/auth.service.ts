import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { Compte } from 'src/compte/entities/compte.entity';
import { CompteService } from 'src/compte/compte.service';
import { AuthLoginDto } from './dto/auth-login.dto';

@Injectable()
export class AuthService {
  constructor(
    private comptesService: CompteService,
    private jwtService: JwtService,
  ) {}

  async login(authLoginDto: AuthLoginDto) {
    const compte = await this.validatecompte(authLoginDto);

    const payload = {
      compteId: compte.id,
    };

    return {
      access_token: this.jwtService.sign(payload),
      role: compte.role,
    };
  }

  async validatecompte(authLoginDto: AuthLoginDto): Promise<Compte> {
    const { email, password } = authLoginDto;

    const compte = await this.comptesService.findByEmail(email);
    if (!(await compte?.validatePassword(password))) {
      throw new UnauthorizedException();
    }

    return compte;
  }
}
