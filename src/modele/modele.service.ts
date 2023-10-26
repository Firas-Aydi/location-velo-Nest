import { Injectable } from '@nestjs/common';
// import { FilesInterceptor } from '@nestjs/platform-express';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { addModeleDto } from './dto/add-modele.dto';
import { Modele } from './entities/modele.entity';
import { AppController } from 'src/app.controller';

@Injectable()
export class ModeleService {
  constructor(
    @InjectRepository(Modele)
    private readonly modeleRepository: Repository<Modele>,
    private appController: AppController,
  ) {}

  async read(id: number) {
    return await this.modeleRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<Modele[]> {
    return await this.modeleRepository.find();
  }

  async findByEtat(): Promise<Modele[]> {
    return await this.modeleRepository.find({ where: { etat: 'OK' } });
  }

  async create(addModeleDto: addModeleDto) {
    const ModeleEntity = new Modele();
    // this.appController.seeUploadedFile(addModeleDto.image, ModeleEntity.image);
    // ModeleEntity.image = addModeleDto.image;
    ModeleEntity.modele = addModeleDto.modele;
    ModeleEntity.pouce = addModeleDto.pouce;
    ModeleEntity.idMar = addModeleDto.idMar;
    const modele = this.modeleRepository.create(ModeleEntity);
    await this.modeleRepository.save(modele);
    return modele;
  }

  async update(id: number, data: Partial<addModeleDto>) {
    await this.modeleRepository.update({ id }, data);
    const modele = this.modeleRepository.findOne({ where: { id } });
    return modele;
  }

  async delete(id: number) {
    const modele = await this.modeleRepository.findOne({ where: { id } });
    await this.modeleRepository.delete({ id });
    return modele;
  }
}
