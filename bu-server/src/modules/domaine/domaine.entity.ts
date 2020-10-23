import { Entity, Column, OneToOne, OneToMany, ManyToOne,JoinColumn } from 'typeorm';
import { Transform } from 'class-transformer';
import {BaseEntity} from './../../com/base.entity';
import {LivreEntity} from'./../livre/livre.entity';

@Entity("domaines")
export class DomaineEntity extends BaseEntity{

@Column()
libelle:string;

@OneToMany(type => LivreEntity, livre => livre.domaine)
livre : LivreEntity[];

}
