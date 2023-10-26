/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { addTypeClientDto } from './dto/add-type-client.dto';
import { TypeClient } from './entities/type-client.entity';

@Injectable()
export class TypeClientService {
  constructor(
    @InjectRepository(TypeClient)
    private readonly typeClientRepository: Repository<TypeClient>,
  ) {}

  async read(id: number) {
    return await this.typeClientRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<TypeClient[]> {
    return await this.typeClientRepository.find();
  }

  async create(addTypeClientDto: addTypeClientDto) {
    const TypeClientEntity = new TypeClient();
    TypeClientEntity.type = addTypeClientDto.type;
    const typeClient = this.typeClientRepository.create(TypeClientEntity);
    await this.typeClientRepository.save(typeClient);
    return typeClient;
  }

  async update(id: number, data: Partial<addTypeClientDto>) {
    await this.typeClientRepository.update({ id }, data);
    const typeClient = this.typeClientRepository.findOne({ where: { id } });
    return typeClient;
  }

  async delete(id: number) {
    const typeClient = await this.typeClientRepository.findOne({ where: { id } });
    await this.typeClientRepository.delete({ id });
    return typeClient;
  }
}
