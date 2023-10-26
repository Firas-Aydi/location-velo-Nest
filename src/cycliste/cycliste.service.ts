/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { addCyclisteDto } from './dto/add-cycliste.dto';
import { Cycliste } from './entities/cycliste.entity';

@Injectable()
export class CyclisteService {
  constructor(
    @InjectRepository(Cycliste)
    private readonly cyclisteRepository: Repository<Cycliste>,
  ) {}

  async read(id: number) {
    return await this.cyclisteRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<Cycliste[]> {
    return await this.cyclisteRepository.find();
  }

  async create(addCyclisteDto: addCyclisteDto) {
    const CyclisteEntity = new Cycliste();
    CyclisteEntity.prenom = addCyclisteDto.prenom;
    CyclisteEntity.nom = addCyclisteDto.nom;
    CyclisteEntity.reseauSoc = addCyclisteDto.reseauSoc;
    CyclisteEntity.telephone = addCyclisteDto.telephone;
    CyclisteEntity.taille = addCyclisteDto.taille;
    const cycliste = this.cyclisteRepository.create(CyclisteEntity);
    await this.cyclisteRepository.save(cycliste);
    return cycliste;
  }

  async update(id: number, data: Partial<addCyclisteDto>) {
    await this.cyclisteRepository.update({ id }, data);
    const cycliste = this.cyclisteRepository.findOne({ where: { id } });
    return cycliste;
  }

  async delete(id: number) {
    const cycliste = await this.cyclisteRepository.findOne({ where: { id } });
    await this.cyclisteRepository.delete({ id });
    return cycliste;
  }
}