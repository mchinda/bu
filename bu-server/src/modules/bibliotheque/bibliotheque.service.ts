import { Injectable,BadRequestException, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, MoreThan, MoreThanOrEqual, LessThan, LessThanOrEqual, Between, IsNull, Equal, In } from "typeorm";
import {BaseService} from "./../../com/base.service";
import {BibliothequeEntity} from "./bibliotheque.entity";

@Injectable()
export class BibliothequeService extends BaseService {

  constructor(@InjectRepository(BibliothequeEntity) private readonly buRepository:Repository<BibliothequeEntity>){
      super(buRepository);
    }

}
