import { Entity, Column, OneToOne, OneToMany, ManyToOne,JoinColumn } from 'typeorm';
import { Transform } from 'class-transformer';
import {BaseEntity} from './../../com/base.entity';
import {EmprunteurEntity} from './../emprunteur/emprunteur.entity';
import {LivreEntity} from './../livre/livre.entity';

@Entity("emprunters")
export class EmprunterEntity extends BaseEntity {

  @Column({type: "timestamp", comment:'Date de de debut'})
  date_debut :Date;

  @Column({type: "timestamp", comment:'Date de fin'})
  date_fin :Date;

  @Column()
  rendu :string;

  @OneToMany(type => LivreEntity, livre => livre.emprunter)
  livre:LivreEntity;

  @ManyToOne(type => EmprunteurEntity, emprunteur => emprunteur.emprunter)
  emprunteur :EmprunteurEntity;
}
