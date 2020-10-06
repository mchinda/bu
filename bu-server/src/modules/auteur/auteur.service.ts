import { Injectable,BadRequestException, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, MoreThan, MoreThanOrEqual, LessThan, LessThanOrEqual, Between, IsNull, Equal, In } from "typeorm";
import {BaseService} from "./../../com/base.service";
import {AuteurEntity} from "./../auteur/auteur.entity";

@Injectable()
export class AuteurService extends BaseService {

constructor(@InjectRepository(AuteurEntity) private readonly auteurRepository:Repository<AuteurEntity>){
  super(auteurRepository);

}
}
