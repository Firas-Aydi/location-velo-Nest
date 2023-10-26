/* eslint-disable prettier/prettier */
import { MarqueVelo } from 'src/marque-velo/entities/marque-velo.entity';
import { TypeClient } from 'src/type-client/entities/type-client.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tarif {
  @PrimaryGeneratedColumn()
  id: number;
  // @Column()
  // typeClient: string;
  // @Column()
  // marqueVelo: string;
  @Column()
  nombreHeure: number;
  @Column()
  tarif: string;
  @Column()
  idMar: string;
  @ManyToOne(() => MarqueVelo, (marque) => marque.Tarif, {
    onDelete: 'CASCADE',onUpdate:'CASCADE'
  })
  @JoinColumn({name:"idMar"})
  marque: MarqueVelo;

  @Column()
  idTCl: string;
  @ManyToOne(() => TypeClient, (typeClient) => typeClient.tarif, {
    onDelete: 'CASCADE',onUpdate:'CASCADE'
  })
  @JoinColumn({name:"idTCl"})
  typeClient: TypeClient;
}
