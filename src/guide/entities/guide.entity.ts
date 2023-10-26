/* eslint-disable prettier/prettier */
import { Type } from 'class-transformer';
import { Location } from 'src/location/entities/location.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Guide {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  prenom: string;
  @Column()
  nom: string;
  @Type(() => Date)
  @Column('text')
  dateNaissance: Date;
  @Column({ unique: true })
  email: string;
  @Column()
  telephone: number;

  @OneToMany(() => Location, (location) => location.guide)
  location: Location[];
}
