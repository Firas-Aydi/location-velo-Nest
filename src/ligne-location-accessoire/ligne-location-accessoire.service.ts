/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { addLigneLocationAccessoireDto } from './dto/add-ligne-location-accessoire.dto';
import { LigneLocationAccessoire} from './entities/ligne-location-accessoire.entity';

@Injectable()
export class LigneLocationAccessoireService {
  constructor(
    @InjectRepository(LigneLocationAccessoire)
    private readonly ligneLocationAccessoireRepository: Repository<LigneLocationAccessoire>,
  ) {}

  async read(id: number) {
    return await this.ligneLocationAccessoireRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<LigneLocationAccessoire[]> {
    return await this.ligneLocationAccessoireRepository.find();
  }

  async create(addLigneLocationAccessoireDto: addLigneLocationAccessoireDto) {
    const LigneLocationAccessoireEntity = new LigneLocationAccessoire();
    LigneLocationAccessoireEntity.nbAcc = addLigneLocationAccessoireDto.nbAcc;
    LigneLocationAccessoireEntity.idLoc = addLigneLocationAccessoireDto.idLoc;
    LigneLocationAccessoireEntity.idAcc = addLigneLocationAccessoireDto.idAcc;
    const ligneLocationAccessoire = this.ligneLocationAccessoireRepository.create(LigneLocationAccessoireEntity);
    await this.ligneLocationAccessoireRepository.save(ligneLocationAccessoire);
    return ligneLocationAccessoire;
  }

  async update(id: number, data: Partial<addLigneLocationAccessoireDto>) {
    await this.ligneLocationAccessoireRepository.update({ id }, data);
    const ligneLocationAccessoire = this.ligneLocationAccessoireRepository.findOne({ where: { id } });
    return ligneLocationAccessoire;
  }

  async delete(id: number) {
    const ligneLocationAccessoire = await this.ligneLocationAccessoireRepository.findOne({ where: { id } });
    await this.ligneLocationAccessoireRepository.delete({ id });
    return ligneLocationAccessoire;
  }
}