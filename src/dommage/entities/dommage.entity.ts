/* eslint-disable prettier/prettier */
import { LigneLocationAccessoire } from 'src/ligne-location-accessoire/entities/ligne-location-accessoire.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dommage {
  @PrimaryGeneratedColumn()
  id: number;
  // @Column()
  // prenom: string;
  // @Column()
  // nom: string;
  // @Column()
  // article: string;
  @Column()
  typeDommage: string;

  @Column()
  idLLAcc: number;
  @ManyToOne(() => LigneLocationAccessoire, (LigLocAcc) => LigLocAcc.dom, {
    onDelete: 'CASCADE',onUpdate: 'CASCADE',
  })
  @JoinColumn({name:"idLLAcc"})
  LigLocAcc: LigneLocationAccessoire;
}
