/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { addTarifDto } from './dto/add-tarif.dto';
import { Tarif } from './entities/tarif.entity';

@Injectable()
export class TarifService {
  constructor(
    @InjectRepository(Tarif)
    private readonly tarifRepository: Repository<Tarif>,
  ) {}

  async read(id: number) {
    return await this.tarifRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<Tarif[]> {
    return await this.tarifRepository.find();
  }

  async create(addtarifDto: addTarifDto) {
    const TarifEntity = new Tarif();
    // TarifEntity.typeClient = addtarifDto.typeClient;
    // TarifEntity.marqueVelo = addtarifDto.marqueVelo;
    TarifEntity.nombreHeure = addtarifDto.nombreHeure;
    TarifEntity.tarif = addtarifDto.tarif;
    TarifEntity.idMar = addtarifDto.idMar;
    TarifEntity.idTCl = addtarifDto.idTCl;
    const tarif = this.tarifRepository.create(TarifEntity);
    await this.tarifRepository.save(tarif);
    return tarif;
  }

  async update(id: number, data: Partial<addTarifDto>) {
    await this.tarifRepository.update({ id }, data);
    const tarif = this.tarifRepository.findOne({ where: { id } });
    return tarif;
  }

  async delete(id: number) {
    const tarif = await this.tarifRepository.findOne({ where: { id } });
    await this.tarifRepository.delete({ id });
    return tarif;
  }
}
