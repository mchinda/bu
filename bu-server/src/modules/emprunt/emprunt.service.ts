import { Injectable,BadRequestException, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, MoreThan, MoreThanOrEqual, LessThan, LessThanOrEqual, Between, IsNull, Equal, In } from "typeorm";
import {BaseService} from "./../../com/base.service";
import {EmpruntEntity} from "./../emprunt/emprunt.entity";

@Injectable()
export class EmpruntService extends BaseService {

  constructor(@InjectRepository(EmpruntEntity) private readonly empruntRepository:Repository<EmpruntEntity>){
    super(empruntRepository);
  }

  async allEmprunt(){
      return await this.empruntRepository.find({
        relations:["livre", "livre.bibliotheque","emprunteur",]
      });
    }

   async deleteEmprunt(body:any){
     console.log(body);
     await this.empruntRepository
       .createQueryBuilder()
       .delete()
       .from(EmpruntEntity)
       .where("id = :id", { id: body.id})
       .execute();
   }

}
