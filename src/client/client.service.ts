/* eslint-disable prettier/prettier */
// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { addClientDto } from './dto/add-client.dto';
// import { Client } from './entities/client.entity';

// @Injectable()
// export class ClientService {
//   constructor(
//     @InjectRepository(Client)
//     private readonly clientRepository: Repository<Client>,
//   ) {}

//   async read(id: number): Promise<Client> {
//     const client = await this.findById(id);
    
//     delete client.password;
//     return client;
//   }

//   async findById(id: number) {
//     return await Client.findOne(id);
//   }

//   async findAll(): Promise<Client[]> {
//     return await this.clientRepository.find();
//   }

//   async create(addClientDto: addClientDto) {
//     const ClientEntity = new Client();
//     ClientEntity.prenom = addClientDto.prenom;
//     ClientEntity.nom = addClientDto.nom;
//     ClientEntity.dateNaissance = addClientDto.dateNaissance;
//     ClientEntity.email = addClientDto.email;
//     ClientEntity.telephone = addClientDto.telephone;
//     ClientEntity.type = addClientDto.type;
//     ClientEntity.password = addClientDto.password;
//     const client = this.clientRepository.create(ClientEntity);
//     await this.clientRepository.save(client);

//     delete client.password;
//     return client;
//   }

//   async update(id: number, data: Partial<addClientDto>) {
//     await this.clientRepository.update({ id }, data);
//     const client = await this.clientRepository.findOne({ where: { id } });
//     delete client.password;
//     return client;
//   }

//   async delete(id: number) {
//     const client = await this.clientRepository.findOne({ where: { id } });
//     await this.clientRepository.delete({ id });
//     return client;
//   }
// }