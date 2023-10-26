/* eslint-disable prettier/prettier */
import { Type } from 'class-transformer';
import { Affecter_acc } from 'src/affecter-acc/entities/affecter-acc.entity';
import { Compte } from 'src/compte/entities/compte.entity';
import { LigneReservation } from 'src/ligne-reservation/entities/ligne-reservation.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;
  @Type(() => Date)
  @Column('text')
  dateLocation: Date;
  @Column()
  HeureDepart: number;
  @Column()
  HeureArrivee: number;
  // @Column()
  // prenom: string;
  // @Column()
  // nom: string;
  // @Column()
  // telephone: number;
  @Column()
  nbVelo:number;
  @Column()
  montant: number;
  @Column()
  avecGuide: boolean;

  @Column()
  idCl: number;
  @ManyToOne(() => Compte, (client) => client.reservation, {
    onDelete: 'CASCADE',onUpdate:'CASCADE'
  })
  @JoinColumn({name:"idCl"})
  client: Compte;

  @OneToMany(() => Affecter_acc, (affAcc) => affAcc.res)
  affAcc: Affecter_acc[];

  @OneToMany(() => LigneReservation, (ligRes) => ligRes.res)
  ligRes: LigneReservation[];

}
