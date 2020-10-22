import { Injectable,BadRequestException, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, MoreThan, MoreThanOrEqual, LessThan, LessThanOrEqual, Between, IsNull, Equal, In } from "typeorm";
import {BaseService} from "./../../com/base.service";
import {VillageEntity} from "./village.entity";

@Injectable()
export class VillageService extends BaseService{

  constructor(@InjectRepository(VillageEntity) private readonly villageRepository:Repository<VillageEntity>){
    super(villageRepository);
  }

}
