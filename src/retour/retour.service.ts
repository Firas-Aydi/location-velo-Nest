// /* eslint-disable prettier/prettier */
// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { addRetourDto } from './dto/add-retour.dto';
// import { Retour } from './entities/retour.entity';

// @Injectable()
// export class RetourService {
//   constructor(
//     @InjectRepository(Retour)
//     private readonly retourRepository: Repository<Retour>,
//   ) {}

//   async read(id: number) {
//     return await this.retourRepository.findOne({ where: { id } });
//   }

//   async findAll(): Promise<Retour[]> {
//     return await this.retourRepository.find();
//   }

//   async create(addRetourDto: addRetourDto) {
//     const RetourEntity = new Retour();
//     RetourEntity.prenom = addRetourDto.prenom;
//     RetourEntity.nom = addRetourDto.nom;
//     RetourEntity.HeureDepart = addRetourDto.HeureDepart;
//     RetourEntity.HeureArrivee = addRetourDto.HeureArrivee;
//     const retour = this.retourRepository.create(RetourEntity);
//     await this.retourRepository.save(retour);
//     return retour;
//   }

//   async update(id: number, data: Partial<addRetourDto>) {
//     await this.retourRepository.update({ id }, data);
//     const retour = this.retourRepository.findOne({ where: { id } });
//     return retour;
//   }

//   async delete(id: number) {
//     const retour = await this.retourRepository.findOne({ where: { id } });
//     await this.retourRepository.delete({ id });
//     return retour;
//   }
// }
