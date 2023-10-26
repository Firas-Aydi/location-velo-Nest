/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars*/
import { Cycliste } from 'src/cycliste/entities/cycliste.entity';
import { Location } from 'src/location/entities/location.entity';
import { Velo } from 'src/velo/entities/velo.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LigneLocation {
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
  idLoc: number;
  @ManyToOne((type) => Location, (loc) => loc.ligLoc, {
    onDelete: 'CASCADE',onUpdate:'CASCADE'
  })
  @JoinColumn({name:"idLoc"})
  loc: Location;

  @Column()
  idVelo: number;
  @ManyToOne((type) => Velo, (velo) => velo.ligLoc, {
    onDelete: 'CASCADE',onUpdate:'CASCADE'
  })
  @JoinColumn({name:"idVelo"})
  velo: Velo;

  @Column()
  idCyc: number;
  @ManyToOne((type) => Cycliste, (cyc) => cyc.ligLoc, {
    onDelete: 'CASCADE',onUpdate:'CASCADE'
  })
  @JoinColumn({name:"idCyc"})
  cyc: Cycliste;
}
