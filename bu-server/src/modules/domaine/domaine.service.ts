import { Injectable,BadRequestException, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, MoreThan, MoreThanOrEqual, LessThan, LessThanOrEqual, Between, IsNull, Equal, In } from "typeorm";
import {BaseService} from "./../../com/base.service";
import {DomaineEntity} from "./../domaine/domaine.entity";

@Injectable()
export class DomaineService extends BaseService {

  constructor(@InjectRepository(DomaineEntity) private readonly domaineRepository:Repository<DomaineEntity>){
    super(domaineRepository);
  }
}
