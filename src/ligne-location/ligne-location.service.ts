/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { addLigneLocationDto } from './dto/add-ligne-location.dto';
import { LigneLocation } from './entities/ligne-location.entity';

@Injectable()
export class LigneLocationService {
  constructor(
    @InjectRepository(LigneLocation)
    private readonly ligneLocationRepository: Repository<LigneLocation>,
  ) {}

  async read(id: number) {
    return await this.ligneLocationRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<LigneLocation[]> {
    return await this.ligneLocationRepository.find();
  }

  async create(addLigneLocationDto: addLigneLocationDto) {
    const LigneLocationEntity = new LigneLocation();
    LigneLocationEntity.idLoc = addLigneLocationDto.idLoc;
    LigneLocationEntity.idVelo = addLigneLocationDto.idVelo;
    LigneLocationEntity.idCyc = addLigneLocationDto.idCyc;
    const ligneLocation = this.ligneLocationRepository.create(LigneLocationEntity);
    await this.ligneLocationRepository.save(ligneLocation);
    return ligneLocation;
  }

  async update(id: number, data: Partial<addLigneLocationDto>) {
    await this.ligneLocationRepository.update({ id }, data);
    const ligneLocation = this.ligneLocationRepository.findOne({ where: { id } });
    return ligneLocation;
  }

  async delete(id: number) {
    const ligneLocation = await this.ligneLocationRepository.findOne({ where: { id } });
    await this.ligneLocationRepository.delete({ id });
    return ligneLocation;
  }
}