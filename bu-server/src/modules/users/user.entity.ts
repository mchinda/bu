import { Entity, Column, OneToOne, OneToMany, ManyToOne,JoinColumn,BeforeInsert, BeforeUpdate } from 'typeorm';
import { Transform } from 'class-transformer';
import {BaseEntity} from './../../com/base.entity';
import * as bcrypt from 'bcrypt';
// import * as bcrypt from 'bcryptjs';


@Entity("users",{schema:process.env.TYPEORM_DATABASE})
export class UserEntity extends BaseEntity{

  @Column()
      nom: string;

      @Column()
      prenom: string;

      @Column({type: "timestamp", comment:'Date de naissance'})
      date_naissance :Date;

      @Column()
      telephone: string;

      @Column({default:null,unique: true ,name: 'email',length: 100})
      login: string;

      @Column({select:true})
      password: string;

      @BeforeInsert()
      @BeforeUpdate()
       async hashPassword() {
          this.password = await bcrypt.hash(this.password, Number(process.env.HASH_SALT));
       }

      @Column({default: 'Non valider'})
      @Column()
      etat:string;
}
