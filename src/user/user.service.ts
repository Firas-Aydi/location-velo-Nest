// /* eslint-disable prettier/prettier */
// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { addUserDto } from './dto/add-user.dto';
// import { User } from './entities/user.entity';

// @Injectable()
// export class UserService {
//   constructor(
//     @InjectRepository(User)
//     private readonly userRepository: Repository<User>,
//   ) {}

//   async read(id: number): Promise<User> {
//     const user = await this.findById(id);

//     delete user.password;
//     return user;
//   }

//   async findById(id: number) {
//     return await User.findOne(id);
//   }

//   async findByEmail(email: string) {
//     return await this.userRepository.findOne({ where: { email:email } });
//   }

//   async findAll(): Promise<User[]> {
//     return await this.userRepository.find();
//   }

//   async create(addUserDto: addUserDto) {
//     const userEntity = new User();
//     userEntity.prenom = addUserDto.prenom;
//     userEntity.nom = addUserDto.nom;
//     userEntity.email = addUserDto.email;
//     userEntity.telephone = addUserDto.telephone;
//     userEntity.role = addUserDto.role;
//     userEntity.password = addUserDto.password;
//     const user = this.userRepository.create(userEntity);
//     await this.userRepository.save(user);

//     delete user.password;
//     return user;
//   }

//   async update(id: number, data: Partial<addUserDto>) {
//     await this.userRepository.update({ id }, data);
//     const user = await this.userRepository.findOne({ where: { id } });
//     delete user.password;
//     return user;
//   }

//   async delete(id: number) {
//     const user = await this.userRepository.findOne({ where: { id } });
//     await this.userRepository.delete({ id });
//     return user;
//   }
// }
