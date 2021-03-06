import { Entity, Column, OneToOne, OneToMany, ManyToOne,JoinColumn } from 'typeorm';
import { Transform } from 'class-transformer';
import {BaseEntity} from './../../com/base.entity';
import {EmpruntEntity} from './../emprunt/emprunt.entity';
@Entity("emprunteurs")
export class EmprunteurEntity extends BaseEntity {

  @Column()
  code: string;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column({type: "timestamp", comment:'Date de naissance'})
  date_naissance :Date;

  @Column()
  profession: string;

  @Column()
  sexe: string;

  @Column()
  adresse: string;

  @Column()
  telephone: string;

  @Column()
  email: string;

  @Column()
  direction: string;

  @OneToMany(type => EmpruntEntity, emprunt => emprunt.emprunteur)
  emprunt:EmpruntEntity[];

}
