import { Entity, Column, OneToOne, OneToMany, ManyToOne,JoinColumn } from 'typeorm';
import { Transform } from 'class-transformer';
import {BaseEntity} from './../../com/base.entity';
import {LivreEntity} from'./../livre/livre.entity';

@Entity("bibliotheque")
export class BibliothequeEntity extends BaseEntity {

  @Column()
  nom_bu: string;
  
  @OneToMany(type => LivreEntity, livre => livre.bibliotheque)
  livre : LivreEntity[];
}
