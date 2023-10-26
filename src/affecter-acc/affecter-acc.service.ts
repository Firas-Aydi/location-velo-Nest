/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { addAffecterAccDto } from './dto/add-Affecter-acc.dto';
import { Affecter_acc } from './entities/affecter-acc.entity';

@Injectable()
export class AffecterAccService {
  constructor(
    @InjectRepository(Affecter_acc)
    private readonly affecter_accRepository: Repository<Affecter_acc>,
  ) {}

  async read(id: number) {
    return await this.affecter_accRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<Affecter_acc[]> {
    return await this.affecter_accRepository.find();
  }

  async create(addAffecterAccDto: addAffecterAccDto) {
    const Affecter_accEntity = new Affecter_acc();
    Affecter_accEntity.nbAcc = addAffecterAccDto.nbAcc;
    Affecter_accEntity.idAcc = addAffecterAccDto.idAcc;
    Affecter_accEntity.idRes = addAffecterAccDto.idRes;
    const affecter_acc = this.affecter_accRepository.create(Affecter_accEntity);
    await this.affecter_accRepository.save(affecter_acc);
    return affecter_acc;
  }

  async update(id: number, data: Partial<addAffecterAccDto>) {
    await this.affecter_accRepository.update({ id }, data);
    const affecter_acc = this.affecter_accRepository.findOne({ where: { id } });
    return affecter_acc;
  }

  async delete(id: number) {
    const affecter_acc = await this.affecter_accRepository.findOne({ where: { id } });
    await this.affecter_accRepository.delete({ id });
    return affecter_acc;
  }
}