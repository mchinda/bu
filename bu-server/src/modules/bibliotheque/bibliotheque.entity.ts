import { Entity, Column, OneToOne, OneToMany, ManyToOne,JoinColumn } from 'typeorm';
import { Transform } from 'class-transformer';
import {BaseEntity} from './../../com/base.entity';

@Entity("bibliotheque")
export class BibliothequeEntity extends BaseEntity {

  @Column()
  nom_bu: string;

}
