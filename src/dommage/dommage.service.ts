/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { addDommageDto } from './dto/add-dommage.dto';
import { Dommage } from './entities/dommage.entity';

@Injectable()
export class DommageService {
  constructor(
    @InjectRepository(Dommage)
    private readonly dommageRepository: Repository<Dommage>,
  ) {}

  async read(id: number) {
    return await this.dommageRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<Dommage[]> {
    return await this.dommageRepository.find();
  }

  async create(addDommageDto: addDommageDto) {
    const DommageEntity = new Dommage();
    // DommageEntity.prenom = addDommageDto.prenom;
    // DommageEntity.nom = addDommageDto.nom;
    // DommageEntity.article = addDommageDto.article;
    DommageEntity.typeDommage = addDommageDto.typeDommage;
    DommageEntity.idLLAcc = addDommageDto.idLLAcc;
    const dommage = this.dommageRepository.create(DommageEntity);
    await this.dommageRepository.save(dommage);
    return dommage;
  }

  async update(id: number, data: Partial<addDommageDto>) {
    await this.dommageRepository.update({ id }, data);
    const dommage = this.dommageRepository.findOne({ where: { id } });
    return dommage;
  }

  async delete(id: number) {
    const dommage = await this.dommageRepository.findOne({ where: { id } });
    await this.dommageRepository.delete({ id });
    return dommage;
  }
}