/* eslint-disable prettier/prettier */
import { Type } from 'class-transformer';
import { Compte } from 'src/compte/entities/compte.entity';
import { Guide } from 'src/guide/entities/guide.entity';
import { LigneLocationAccessoire } from 'src/ligne-location-accessoire/entities/ligne-location-accessoire.entity';
import { LigneLocation } from 'src/ligne-location/entities/ligne-location.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  idRes: number;
  @Type(() => Date)
  @Column('text')
  dateLocation: Date;
  @Column()
  HeureDepart: number;
  @Column()
  HeureArrivee: number;
  @Column({nullable:true})
  circuit: string;
  @Column({nullable:true})
  cin: string;
  @Column({nullable:true})
  cheque: string;
  @Column()
  nbVelo:number;
  @Column()
  montant: number;
  @Column()
  retour: boolean;

  @Column()
  idCl: number;
  @ManyToOne(() => Compte, (client) => client.location, {
    onDelete: 'CASCADE',onUpdate:'CASCADE'
  })
  @JoinColumn({name:"idCl"})
  client: Compte;

  @Column({nullable:true})
  idGui: number;
  @ManyToOne(() => Guide, (guide) => guide.location, {
    onDelete: 'CASCADE',onUpdate:'CASCADE'
  })
  @JoinColumn({name:"idGui"})
  guide: Guide;

  @OneToMany(() => LigneLocation, (ligLoc) => ligLoc.loc)
  ligLoc: LigneLocation[];

  @OneToMany(() => LigneLocationAccessoire, (ligLocAcc) => ligLocAcc.loc)
  ligLocAcc: LigneLocationAccessoire[];
}
