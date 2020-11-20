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

  @Column({type: "date", comment:'Date d achat'})
  date_achat :Date;

  @Column({type: "date", comment:'Date de parution'})
  date_parution :Date;

  @ManyToOne(type => AuteurEntity, auteur => auteur.livre)
  @JoinColumn()
  auteur:AuteurEntity;

  @ManyToOne(type => BibliothequeEntity, bibliotheque => bibliotheque.livre)
  @JoinColumn()
  bibliotheque:BibliothequeEntity;

  @ManyToOne(type => DomaineEntity, domaine => domaine.livre)
  @JoinColumn()
  domaine:DomaineEntity;

  @OneToMany(type => EmpruntEntity, emprunt => emprunt.livre)
  emprunt : EmpruntEntity[];
  
}
