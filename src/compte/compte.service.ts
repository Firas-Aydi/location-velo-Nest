/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { addCompteDto } from './dto/add-compte.dto';
import { Compte } from './entities/compte.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class CompteService {
  constructor(
    @InjectRepository(Compte)
    private readonly compteRepository: Repository<Compte>,
  ) {}

  async read(id: number): Promise<Compte> {
    const compte = await this.findById(id);

    delete compte.password;
    return compte;
  }

  async findById(id: number) {
    return await Compte.findOne(id);
  }

  async findByEmail(email: string) {
    return await this.compteRepository.findOne({ where: { email:email } });
  }
  async findUsers() {
    return await this.compteRepository.find({where:{isUser:true}});
  }
  async findClients() {
    return await this.compteRepository.find({where:{isUser:false}});
  }

  async findAll(): Promise<Compte[]> {
    return await this.compteRepository.find();
  }

  async create(addCompteDto: addCompteDto) {
    const CompteEntity = new Compte();
    CompteEntity.prenom = addCompteDto.prenom;
    CompteEntity.nom = addCompteDto.nom;
    CompteEntity.dateNaissance = addCompteDto.dateNaissance;
    CompteEntity.email = addCompteDto.email;
    CompteEntity.telephone = addCompteDto.telephone;
    CompteEntity.role = addCompteDto.role;
    CompteEntity.password = addCompteDto.password;
    CompteEntity.isUser = addCompteDto.isUser;
    const compte = this.compteRepository.create(CompteEntity);
    await this.compteRepository.save(compte);

    delete compte.password;
    return compte;
  }

  async update(id: number, data: Partial<addCompteDto>) {
    data.password = await bcrypt.hash(data.password, 8);
    await this.compteRepository.update({ id }, data);
    const compte = await this.compteRepository.findOne({ where: { id } });
    // delete compte.password;
    return compte;
  }

  async delete(id: number) {
    const compte = await this.compteRepository.findOne({ where: { id } });
    await this.compteRepository.delete({ id });
    return compte;
  }
}