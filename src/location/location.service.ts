/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { groupBy } from 'rxjs/internal/operators/groupBy';
import { Repository } from 'typeorm';
import { addLocationDto } from './dto/add-location.dto';
import { Location } from './entities/location.entity';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
  ) {}

  async read(id: number) {
    return await this.locationRepository.findOne({ where: { id } });
  }
  // async readUniq(id: number, modele: string, pouce:string) {
  //   return await this.locationRepository.find()
  // }

  async findAll(): Promise<Location[]> {
    return await this.locationRepository.find();
  }

  async create(addLocationDto: addLocationDto) {
    const LocationEntity = new Location();
    // LocationEntity.prenom = addLocationDto.prenom;
    // LocationEntity.nom = addLocationDto.nom;
    LocationEntity.idRes = addLocationDto.idRes;
    LocationEntity.dateLocation = addLocationDto.dateLocation;
    LocationEntity.HeureDepart = addLocationDto.HeureDepart;
    LocationEntity.HeureArrivee = addLocationDto.HeureArrivee;
    // LocationEntity.telephone = addLocationDto.telephone;
    LocationEntity.nbVelo = addLocationDto.nbVelo;
    LocationEntity.circuit = addLocationDto.circuit;
    LocationEntity.cin = addLocationDto.cin;
    LocationEntity.cheque = addLocationDto.cheque;
    LocationEntity.montant = addLocationDto.montant;
    LocationEntity.retour = addLocationDto.retour;
    LocationEntity.idCl = addLocationDto.idCl;
    LocationEntity.idGui = addLocationDto.idGui;
    const location = this.locationRepository.create(LocationEntity);
    await this.locationRepository.save(location);
    return location;
  }

  async update(id: number, data: Partial<addLocationDto>) {
    await this.locationRepository.update({ id }, data);
    const location = this.locationRepository.findOne({ where: { id } });
    return location;
  }

  async delete(id: number) {
    const location = await this.locationRepository.findOne({ where: { id } });
    await this.locationRepository.delete({ id });
    return location;
  }
}