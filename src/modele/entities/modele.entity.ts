/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { LigneReservation } from 'src/ligne-reservation/entities/ligne-reservation.entity';
import { MarqueVelo } from 'src/marque-velo/entities/marque-velo.entity';
import { Velo } from 'src/velo/entities/velo.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('modele')
export class Modele {
  @PrimaryGeneratedColumn()
  id: number;
  // @Column({ type: 'blob' })
  // image: string;
  @Column()
  modele: string;
  @Column()
  pouce: string;
  @Column()
  idMar: number;
  @ManyToOne((type) => MarqueVelo, (marque) => marque.modele, {
    onDelete: 'CASCADE',onUpdate:'CASCADE'
  })
  @JoinColumn({name:"idMar"})
  marque: MarqueVelo;

  @OneToMany(() => Velo,(velo) => velo.modele,)
  velo: Velo[];

  @OneToMany(() => LigneReservation,(ligRes) => ligRes.modele,)
  ligRes: LigneReservation[];

}
