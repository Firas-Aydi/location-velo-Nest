/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

// import { LigneLocation } from 'src/ligne-reservation/entities/ligne-reservation.entity';
import { LigneLocation } from 'src/ligne-location/entities/ligne-location.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Cycliste extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  prenom: string;
  @Column()
  nom: string;
  @Column({ nullable: true })
  telephone: number;
  @Column({ nullable: true })
  reseauSoc: string;
  @Column({ nullable: true })
  taille: number;

  @OneToMany((type) => LigneLocation, (ligLoc) => ligLoc.cyc)
  ligLoc: LigneLocation[];
}
