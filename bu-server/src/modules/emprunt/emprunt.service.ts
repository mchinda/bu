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
}
