/* eslint-disable prettier/prettier */
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  import { addCompteDto } from './dto/add-compte.dto';
  import { Compte } from './entities/compte.entity';
  import { CompteService } from './compte.service';
  
  @Controller('compte')
  export class CompteController {
    constructor(private readonly compteService: CompteService) {}
    @Get()
    getAll(): Promise<Compte[]> {
      return this.compteService.findAll();
    }
    @Get('/users')
    getUsers(): Promise<Compte[]> {
      return this.compteService.findUsers();
    }
    @Get('/clients')
    getClients(): Promise<Compte[]> {
      return this.compteService.findClients();
    }
  
    @Get('/:id')
    getById(@Param('id') id: number) {
      return this.compteService.read(id);
    }
  
    @Post()
    create(@Body() addCompteDto: addCompteDto) {
      return this.compteService.create(addCompteDto);
    }
  
    @Put('/:id')
    update(@Param('id') id: number, @Body() addCompteDto: addCompteDto): Promise<Compte> {
      return this.compteService.update(id, addCompteDto);
    }
  
    @Delete('/:id')
    delete(@Param('id') id: number): Promise<Compte> {
      return this.compteService.delete(id);
    }
  }
  