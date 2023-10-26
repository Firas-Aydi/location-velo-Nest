/* eslint-disable prettier/prettier */
import { Tarif } from 'src/tarif/entities/tarif.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TypeClient {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({unique:true})
  type: string;

  @OneToMany(() => Tarif, (tarif) => tarif.typeClient)
  tarif: Tarif[];
}
