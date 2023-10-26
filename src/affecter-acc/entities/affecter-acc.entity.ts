/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars*/
import { Accessoire } from 'src/accessoire/entities/accessoire.entity';
import { Reservation } from 'src/reservation/entities/reservation.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Affecter_acc {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nbAcc: number;

  @Column()
  idRes: number;
  @ManyToOne((type) => Reservation, (res) => res.affAcc, {
    onDelete: 'CASCADE',onUpdate:'CASCADE'
  })
  @JoinColumn({name:"idRes"})
  res: Reservation;

  @Column()
  idAcc: number;
  @ManyToOne((type) => Accessoire, (acc) => acc.affAcc, {
    onDelete: 'CASCADE',onUpdate:'CASCADE'
  })
  @JoinColumn({name:"idAcc"})
  acc: Accessoire;
}
