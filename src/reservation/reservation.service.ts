/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { groupBy } from 'rxjs/internal/operators/groupBy';
import { Repository } from 'typeorm';
import { addReservationDto } from './dto/add-reservation.dto';
import { Reservation } from './entities/reservation.entity';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private readonly reservationRepository: Repository<Reservation>,
  ) {}

  async read(id: number) {
    return await this.reservationRepository.findOne({ where: { id } });
  }
  // async readUniq(id: number, modele: string, pouce:string) {
  //   return await this.reservationRepository.find()
  // }

  async findAll(): Promise<Reservation[]> {
    return await this.reservationRepository.find();
  }

  async create(addReservationDto: addReservationDto) {
    const ReservationEntity = new Reservation();
    // ReservationEntity.prenom = addReservationDto.prenom;
    // ReservationEntity.nom = addReservationDto.nom;
    ReservationEntity.dateLocation = addReservationDto.dateLocation;
    ReservationEntity.HeureDepart = addReservationDto.HeureDepart;
    ReservationEntity.HeureArrivee = addReservationDto.HeureArrivee;
    // ReservationEntity.telephone = addReservationDto.telephone;
    ReservationEntity.nbVelo = addReservationDto.nbVelo;
    ReservationEntity.montant = addReservationDto.montant;
    ReservationEntity.avecGuide = addReservationDto.avecGuide;
    ReservationEntity.idCl = addReservationDto.idCl;
    const reservation = this.reservationRepository.create(ReservationEntity);
    await this.reservationRepository.save(reservation);
    return reservation;
  }

  async update(id: number, data: Partial<addReservationDto>) {
    await this.reservationRepository.update({ id }, data);
    const reservation = this.reservationRepository.findOne({ where: { id } });
    return reservation;
  }

  async delete(id: number) {
    const reservation = await this.reservationRepository.findOne({ where: { id } });
    await this.reservationRepository.delete({ id });
    return reservation;
  }
}