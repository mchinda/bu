import { Injectable,BadRequestException, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, MoreThan, MoreThanOrEqual, LessThan, LessThanOrEqual, Between, IsNull, Equal, In } from "typeorm";
import {BaseService} from "./../../com/base.service";
import {LivreEntity} from "./../livre/livre.entity";

@Injectable()
export class LivreService extends BaseService {
  constructor(@InjectRepository(LivreEntity) private readonly livreRepository:Repository<LivreEntity>){
    super(livreRepository);
  }

  async deleteLivre(body:any){
    await this.livreRepository
      .createQueryBuilder()
      .delete()
      .from(LivreEntity)
      .where("id = :id", { id: body.id, isbn:body.isbn})
      .execute();
  }

  async allLivres(){
      return await this.livreRepository.find({
        relations:["auteur", "bibliotheque","emprunt","domaine"]
      });
    }
}
