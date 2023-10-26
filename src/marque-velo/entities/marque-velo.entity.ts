/* eslint-disable prettier/prettier */
import { Tarif } from 'src/tarif/entities/tarif.entity';
import { Modele } from 'src/modele/entities/modele.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MarqueVelo {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({unique:true})
  marque: string;

  @OneToMany(() => Tarif, (Tarif) => Tarif.marque,)
  Tarif: Tarif[];

  @OneToMany(() => Modele, (modele) => modele.marque,)
  modele: Modele[];

}
