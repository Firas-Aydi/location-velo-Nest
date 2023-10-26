/* eslint-disable prettier/prettier */
// /* eslint-disable @typescript-eslint/no-unused-vars */
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
// export class User extends BaseEntity {
//   @PrimaryGeneratedColumn()
//   id: number;
//   @Column()
//   prenom: string;
//   @Column()
//   nom: string;
//   @Column({unique: true})
//   email: string;
//   @Column({unique: true})
//   telephone: number;
//   @Column()
//   role: string;
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
