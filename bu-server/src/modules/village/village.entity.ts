import { Entity, Column, OneToOne, OneToMany, ManyToOne,JoinColumn } from 'typeorm';
import { Transform } from 'class-transformer';
import {BaseEntity} from './../../com/base.entity';

@Entity("village")
export class VillageEntity extends BaseEntity {

  @Column()
  nom_village: string;

}
