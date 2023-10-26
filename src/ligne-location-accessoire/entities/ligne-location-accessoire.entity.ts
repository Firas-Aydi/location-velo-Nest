/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars*/
import { Accessoire } from 'src/accessoire/entities/accessoire.entity';
import { Dommage } from 'src/dommage/entities/dommage.entity';
import { Location } from 'src/location/entities/location.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class LigneLocationAccessoire {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nbAcc: number;

  @Column()
  idLoc: number;
  @ManyToOne((type) => Location, (loc) => loc.ligLocAcc, {
    onDelete: 'CASCADE',onUpdate:'CASCADE'
  })
  @JoinColumn({name:"idLoc"})
  loc: Location;

  @Column()
  idAcc: number;
  @ManyToOne((type) => Accessoire, (acc) => acc.affAcc, {
    onDelete: 'CASCADE',onUpdate:'CASCADE'
  })
  @JoinColumn({name:"idAcc"})
  acc: Accessoire;

  @OneToMany(() => Dommage, (dom) => dom.LigLocAcc)
  dom: Dommage[];
}
