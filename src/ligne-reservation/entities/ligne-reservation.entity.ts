/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars*/
import { type } from 'node:os';
import { Cycliste } from 'src/cycliste/entities/cycliste.entity';
import { Modele } from 'src/modele/entities/modele.entity';
import { Reservation } from 'src/reservation/entities/reservation.entity';
import { Velo } from 'src/velo/entities/velo.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LigneReservation {
  @PrimaryGeneratedColumn()
  id: number;
  // @Column()
  // prenom: string;
  // @Column()
  // nom: string;
  // @Column()
  // telephone: number;
  // @Column()
  // nbVelo: number;
  // @Column()
  // marque: string;
  // @Column()
  // modele: string;
  // @Column()
  // pouce: string;

  // @ManyToOne((type) => Cycliste, (cycliste) => cycliste.LigLoc, {
  //   cascade: ['insert', 'update', 'remove'],
  //   nullable: true,
  //   eager: true,
  // })
  // cyc: Cycliste;
  @Column()
  idRes: number;
  @ManyToOne((type) => Reservation, (res) => res.ligRes, {
    onDelete: 'CASCADE',onUpdate:'CASCADE'
  })
  @JoinColumn({name:"idRes"})
  res: Reservation;

  @Column()
  idMod: number;
  @ManyToOne((type) => Modele, (modele) => modele.ligRes, {
    onDelete: 'CASCADE',onUpdate:'CASCADE'
  })
  @JoinColumn({name:"idMod"})
  modele: Modele;

  @Column()
  idCyc: number;
  @ManyToOne((type) => Cycliste, (cyc) => cyc.ligLoc, {
    onDelete: 'CASCADE',onUpdate:'CASCADE'
  })
  @JoinColumn({name:"idCyc"})
  cyc: Cycliste;
}
