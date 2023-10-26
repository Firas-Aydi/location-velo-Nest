/* eslint-disable prettier/prettier */
import { Type } from 'class-transformer';
import { Velo } from 'src/velo/entities/velo.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reparation {
  @PrimaryGeneratedColumn()
  id: number;
  // @Column()
  // matricule: string;
  @Column()
  description: string;
  @Type(() => Date)
  @Column('text')
  date: Date;
  @Column()
  prix: number;
  @Column()
  idVelo: number;
  @ManyToOne(() => Velo, (velo) => velo.rep, {
    onDelete: 'CASCADE',onUpdate:'CASCADE'
  })
  @JoinColumn({name:"idVelo"})
  velo: Velo;
}
