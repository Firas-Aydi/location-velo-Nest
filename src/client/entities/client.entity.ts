/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import { Type } from 'class-transformer';
// import { type } from 'node:os';
// import { Compte } from 'src/compte/entities/compte.entity';
// import {
//   BaseEntity,
//   BeforeInsert,
//   Column,
//   Entity,
//   OneToMany,
//   PrimaryGeneratedColumn,
// } from 'typeorm';
// import * as bcrypt from 'bcryptjs';
// @Entity()
// export class Client extends BaseEntity{

//   @PrimaryGeneratedColumn()
//   id: number;
//   @Column()
//   prenom: string;
//   @Column()
//   nom: string;
//   @Type(() => Date)
//   @Column('text')
//   dateNaissance: Date;
//   @Column({ unique: true })
//   email: string;
//   @Column({ unique: true })
//   telephone: number;
//   @Column()
//   type: string;
//   @Column()
//   password: string;


//   @BeforeInsert()
//   async hashPassword() {
//     this.password = await bcrypt.hash(this.password, 8);
//   }

//   async validatePassword(password: string): Promise<boolean> {
//     return bcrypt.compare(password, this.password);
//   }
// }
