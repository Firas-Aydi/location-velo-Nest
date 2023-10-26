/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { addMarqueVeloDto } from './dto/add-marque-velo.dto';
import { MarqueVelo } from './entities/marque-velo.entity';

@Injectable()
export class MarqueVeloService {
  constructor(
    @InjectRepository(MarqueVelo)
    private readonly veloRepository: Repository<MarqueVelo>,
  ) {}

  async read(id: number) {
    return await this.veloRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<MarqueVelo[]> {
    return await this.veloRepository.find();
  }

  async create(addveloDto: addMarqueVeloDto) {
    const MarqueVeloEntity = new MarqueVelo();
    MarqueVeloEntity.marque = addveloDto.marque;
    const velo = this.veloRepository.create(MarqueVeloEntity);
    await this.veloRepository.save(velo);
    return velo;
  }

  async update(id: number, data: Partial<addMarqueVeloDto>) {
    await this.veloRepository.update({ id }, data);
    const velo = this.veloRepository.findOne({ where: { id } });
    return velo;
  }

  async delete(id: number) {
    const velo = await this.veloRepository.findOne({ where: { id } });
    await this.veloRepository.delete({ id });
    return velo;
  }
}
