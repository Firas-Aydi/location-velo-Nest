/* eslint-disable prettier/prettier */
import { Affecter_acc } from 'src/affecter-acc/entities/affecter-acc.entity';
import { LigneLocationAccessoire } from 'src/ligne-location-accessoire/entities/ligne-location-accessoire.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Accessoire {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique:true })
  article: string;
  @Column()
  nombre: number;
  @Column()
  prix: number;

  @OneToMany(() => Affecter_acc, (affAcc) => affAcc.acc)
  affAcc: Affecter_acc[];

  @OneToMany(() => LigneLocationAccessoire, (ligLocAcc) => ligLocAcc.acc)
  ligLocAcc: LigneLocationAccessoire[];
}
