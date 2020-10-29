import { Injectable,BadRequestException, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, MoreThan, MoreThanOrEqual, LessThan, LessThanOrEqual, Between, IsNull, Equal, In } from "typeorm";
import {BaseService} from "./../../com/base.service";
import {EmprunteurEntity} from "./../emprunteur/emprunteur.entity";

@Injectable()
export class EmprunteurService extends BaseService {

  constructor(@InjectRepository(EmprunteurEntity) private readonly emprunteurRepository:Repository<EmprunteurEntity>){
    super(emprunteurRepository);
  }

  async deleteAdherent(body:any){
    await this.emprunteurRepository
      .createQueryBuilder()
      .delete()
      .from(EmprunteurEntity)
      .where("id = :id", { id: body.id, code:body.code})
      .execute();
  }

}
