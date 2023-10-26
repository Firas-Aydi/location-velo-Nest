/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { addAccessoireDto } from './dto/add-accessoire.dto';
import { Accessoire } from './entities/accessoire.entity';

@Injectable()
export class AccessoireService {
  constructor(
    @InjectRepository(Accessoire)
    private readonly accessoireRepository: Repository<Accessoire>,
  ) {}

  async read(id: number) {
    return await this.accessoireRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<Accessoire[]> {
    return await this.accessoireRepository.find();
  }

  async create(addAccessoireDto: addAccessoireDto) {
    const AccessoireEntity = new Accessoire();
    AccessoireEntity.article = addAccessoireDto.article;
    AccessoireEntity.nombre = addAccessoireDto.nombre;
    AccessoireEntity.prix = addAccessoireDto.prix;

    const accessoire = this.accessoireRepository.create(AccessoireEntity);
    await this.accessoireRepository.save(accessoire);
    return accessoire;
  }

  async update(id: number, data: Partial<addAccessoireDto>) {
    await this.accessoireRepository.update({ id }, data);
    const accessoire = this.accessoireRepository.findOne({ where: { id } });
    return accessoire;
  }

  async delete(id: number) {
    const accessoire = await this.accessoireRepository.findOne({ where: { id } });
    await this.accessoireRepository.delete({ id });
    return accessoire;
  }
}