/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { type } from 'node:os';
import { Type } from 'class-transformer';
import { Reservation } from 'src/reservation/entities/reservation.entity';
import { Location } from 'src/location/entities/location.entity';

@Entity()
export class Compte extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  prenom: string;
  @Column()
  nom: string;
  @Type(() => Date)
  @Column('text',{nullable:true})
  dateNaissance: Date;
  @Column({ unique: true })
  email: string;
  @Column()
  telephone: number;
  @Column()
  role: string;
  @Column()
  password: string;
  @Column({default:false})
  isUser:boolean;

  @BeforeInsert()
  // @BeforeUpdate()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 8);
  }

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }

  @OneToMany(() => Reservation,(reservation) => reservation.client)
  reservation: Reservation[];

  @OneToMany(() => Location,(location) => location.client)
  location: Location[];
}
