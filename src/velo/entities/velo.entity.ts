/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import { LigneLocation } from 'src/ligne-reservation/entities/ligne-reservation.entity';
import { LigneLocation } from 'src/ligne-location/entities/ligne-location.entity';
import { Modele } from 'src/modele/entities/modele.entity';
import { Reparation } from 'src/reparation/entities/reparation.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('velo')
export class Velo {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({unique:true})
  matricule: string;
  // @Column({ type: 'blob' })
  // image: string;
  // @Column()
  // marque: string;
  // @Column()
  // modele: string;
  // @Column()
  // pouce: string;
  @Column()
  etat: string;
  @Column()
  idMod: number;
  @ManyToOne((type) => Modele, (modele) => modele.velo, {
    onDelete: 'CASCADE',onUpdate:'CASCADE'
  })
  @JoinColumn({name:"idMod"})
  modele: Modele;

  @OneToMany(() => LigneLocation,(ligLoc) => ligLoc.velo,)
  ligLoc: LigneLocation[];

  @OneToMany(() => Reparation,(rep) => rep.velo,)
  rep: Reparation[];
}
