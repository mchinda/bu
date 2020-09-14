import { Entity, Column, OneToOne, OneToMany, ManyToOne,JoinColumn } from 'typeorm';
import { Transform } from 'class-transformer';
import {BaseEntity} from './../../com/base.entity';
import {EmprunterEntity} from './../emprunter/emprunter.entity';
@Entity("emprunteurs")
export class EmprunteurEntity extends BaseEntity {

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column({type: "timestamp", comment:'Date de naissance'})
  date_naissance :Date;

  @Column()
  direction: string;

  @OneToMany(type => EmprunterEntity, emprunter => emprunter.emprunteur)
  emprunter:EmprunterEntity;

}
