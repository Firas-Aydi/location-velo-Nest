import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { addVeloDto } from './dto/add-velo.dto';
import { Velo } from './entities/velo.entity';

@Injectable()
export class VeloService {
  constructor(
    @InjectRepository(Velo)
    private readonly veloRepository: Repository<Velo>,
  ) {}

  async read(id: number) {
    return await this.veloRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<Velo[]> {
    return await this.veloRepository.find();
  }

  async findByEtat(): Promise<Velo[]> {
    return await this.veloRepository.find({ where: { etat: 'OK' } });
  }

  async create(addVeloDto: addVeloDto) {
    const VeloEntity = new Velo();
    VeloEntity.matricule = addVeloDto.matricule;
    VeloEntity.etat = addVeloDto.etat;
    VeloEntity.idMod = addVeloDto.idMod;
    const velo = this.veloRepository.create(VeloEntity);
    // const veloExist = this.veloRepository.findOne({
    //   where: { matricule: addVeloDto.matricule },
    // });
    // console.log(ligneReservationExist);
    // if (!veloExist) {
    await this.veloRepository.save(velo);
    return velo;
    // }
  }

  async update(id: number, data: Partial<addVeloDto>) {
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
