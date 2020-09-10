import { Entity, Column, OneToOne, OneToMany, ManyToOne,JoinColumn } from 'typeorm';
import { Transform } from 'class-transformer';
import {BaseEntity} from './../../com/base.entity';

@Entity("users")
export class UserEntity extends BaseEntity{

  @Column()
      nom: string;

      @Column()
      prenom: string;

      @Column({default:null})
      departement: string;

      @Column()
      telephone: string;

      @Column({default:null,unique: true ,name: 'email',length: 100})
      login: string;

      @Column()
      password: string;

      @Column()
      isActive: string;

      //@Column({default: 'Non valider'})
      @Column()
      etat:string;
}
