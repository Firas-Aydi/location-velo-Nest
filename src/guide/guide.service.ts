/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { addGuideDto } from './dto/add-guide.dto';
import { Guide } from './entities/guide.entity';

@Injectable()
export class GuideService {
  constructor(
    @InjectRepository(Guide)
    private readonly guideRepository: Repository<Guide>,
  ) {}

  async read(id: number) {
    return await this.guideRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<Guide[]> {
    return await this.guideRepository.find();
  }

  async create(addGuideDto: addGuideDto) {
    const GuideEntity = new Guide();
    GuideEntity.prenom = addGuideDto.prenom;
    GuideEntity.nom = addGuideDto.nom;
    GuideEntity.dateNaissance = addGuideDto.dateNaissance;
    GuideEntity.email = addGuideDto.email;
    GuideEntity.telephone = addGuideDto.telephone;
    const guide = this.guideRepository.create(GuideEntity);
    await this.guideRepository.save(guide);
    return guide;
  }

  async update(id: number, data: Partial<addGuideDto>) {
    await this.guideRepository.update({ id }, data);
    const guide = this.guideRepository.findOne({ where: { id } });
    return guide;
  }

  async delete(id: number) {
    const guide = await this.guideRepository.findOne({ where: { id } });
    await this.guideRepository.delete({ id });
    return guide;
  }
}