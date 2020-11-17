import { Entity, Column, OneToOne, OneToMany, ManyToOne,JoinColumn } from 'typeorm';
import { Transform } from 'class-transformer';
import {BaseEntity} from './../../com/base.entity';
import {EmpruntEntity} from './../emprunt/emprunt.entity';
import {DomaineEntity} from './../domaine/domaine.entity';
import {AuteurEntity} from './../auteur/auteur.entity';
import {BibliothequeEntity} from './../bibliotheque/bibliotheque.entity';
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
  @JoinColumn()
  auteur:AuteurEntity;

  @ManyToOne(type => BibliothequeEntity, bibliotheque => bibliotheque.livre)
  @JoinColumn()
  bibliotheque:BibliothequeEntity;

  @ManyToOne(type => EmpruntEntity, emprunt => emprunt.livre)
  @JoinColumn()
  emprunt:EmpruntEntity;

  @ManyToOne(type => DomaineEntity, domaine => domaine.livre)
  @JoinColumn()
  domaine:DomaineEntity;

}
