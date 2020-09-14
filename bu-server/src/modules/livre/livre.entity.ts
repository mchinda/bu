import { Entity, Column, OneToOne, OneToMany, ManyToOne,JoinColumn } from 'typeorm';
import { Transform } from 'class-transformer';
import {BaseEntity} from './../../com/base.entity';
import {EmprunterEntity} from './../emprunter/emprunter.entity';
import {DomaineEntity} from './../domaine/domaine.entity';
import {AuteurEntity} from './../auteur/auteur.entity';

@Entity("livres")
export class LivreEntity extends BaseEntity{

  @Column()
  titre: string;

  @Column()
  langue_livre: string;

  @Column()
  isbn: string;

  @Column()
  nbr_page: string;

  @Column()
  nbr_examplaire: string;

  @Column()
  image_livre: string;

  @Column({type: "timestamp", comment:'Date de naissance'})
  date_achat :Date;

  @Column({type: "timestamp", comment:'Date de naissance'})
  date_parution :Date;

  @ManyToOne(type => AuteurEntity, auteur => auteur.livre)
  auteur:AuteurEntity;

  @ManyToOne(type => EmprunterEntity, emprunter => emprunter.livre)
  emprunter:EmprunterEntity;

  @ManyToOne(type => DomaineEntity, domaine => domaine.livre)
  domaine:DomaineEntity;

}
