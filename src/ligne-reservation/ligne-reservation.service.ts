/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { addLigneReservationDto } from './dto/add-ligne-reservation.dto';
import { LigneReservation } from './entities/ligne-reservation.entity';

@Injectable()
export class LigneReservationService {
  constructor(
    @InjectRepository(LigneReservation)
    private readonly ligneReservationRepository: Repository<LigneReservation>,
  ) {}

  async read(id: number) {
    return await this.ligneReservationRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<LigneReservation[]> {
    return await this.ligneReservationRepository.find();
  }

  async create(addLigneReservationDto: addLigneReservationDto) {
    const LigneReservationEntity = new LigneReservation();
    // LigneReservationEntity.nbVelo = addLigneReservationDto.nbVelo;
    LigneReservationEntity.idMod = addLigneReservationDto.idMod;
    LigneReservationEntity.idRes = addLigneReservationDto.idRes;
    LigneReservationEntity.idCyc = addLigneReservationDto.idCyc;
    const ligneReservation = this.ligneReservationRepository.create(LigneReservationEntity);
    const ligneReservationExist = this.ligneReservationRepository.findOne({where: {idCyc:addLigneReservationDto.idCyc}})
    console.log(ligneReservationExist)
    await this.ligneReservationRepository.save(ligneReservation);
    return ligneReservation;
  }

  async update(id: number, data: Partial<addLigneReservationDto>) {
    await this.ligneReservationRepository.update({ id }, data);
    const ligneReservation = this.ligneReservationRepository.findOne({ where: { id } });
    return ligneReservation;
  }

  async delete(id: number) {
    const ligneReservation = await this.ligneReservationRepository.findOne({ where: { id } });
    await this.ligneReservationRepository.delete({ id });
    return ligneReservation;
  }
}