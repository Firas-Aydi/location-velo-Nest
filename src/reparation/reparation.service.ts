import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { addReparationDto } from './dto/add-reparation.dto';
import { Reparation } from './entities/reparation.entity';

@Injectable()
export class ReparationService {
  constructor(
    @InjectRepository(Reparation)
    private readonly reparationRepository: Repository<Reparation>,
  ) {}

  async read(id: number) {
    return await this.reparationRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<Reparation[]> {
    return await this.reparationRepository.find();
  }

  async create(addReparationDto: addReparationDto) {
    const ReparationEntity = new Reparation();
    // ReparationEntity.matricule = addReparationDto.matricule;
    ReparationEntity.description = addReparationDto.description;
    ReparationEntity.date = addReparationDto.date;
    ReparationEntity.prix = addReparationDto.prix;
    ReparationEntity.idVelo = addReparationDto.idVelo;
    const reparation = this.reparationRepository.create(ReparationEntity);
    await this.reparationRepository.save(reparation);
    return reparation;
  }

  async update(id: number, data: Partial<addReparationDto>) {
    await this.reparationRepository.update({ id }, data);
    const reparation = this.reparationRepository.findOne({ where: { id } });
    return reparation;
  }

  async delete(id: number) {
    const reparation = await this.reparationRepository.findOne({
      where: { id },
    });
    await this.reparationRepository.delete({ id });
    return reparation;
  }
}
