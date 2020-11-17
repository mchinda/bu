import { Entity, Column, OneToOne, OneToMany, ManyToOne,JoinColumn } from 'typeorm';
import { Transform } from 'class-transformer';
import {BaseEntity} from './../../com/base.entity';
import {EmprunteurEntity} from './../emprunteur/emprunteur.entity';
import {LivreEntity} from './../livre/livre.entity';

@Entity("Emprunts")
export class EmpruntEntity extends BaseEntity {

  @Column({type: "timestamp", comment:'Date de de debut'})
  date_emprunt :Date;

  @Column({type: "timestamp", comment:'Date de fin'})
  date_retour :Date;

  @Column()
  rendu :string;

  @OneToMany(type => LivreEntity, livre => livre.emprunt)
  livre:LivreEntity;

  @ManyToOne(type => EmprunteurEntity, emprunteur => emprunteur.emprunt)
  emprunteur :EmprunteurEntity;
}
