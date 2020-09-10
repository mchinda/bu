import { Injectable, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, MoreThan, MoreThanOrEqual, LessThan, LessThanOrEqual, Between, IsNull, Equal, In } from "typeorm";
import {BaseService} from "./../../com/base.service";
import { AutorisationEntity } from "./autorisation.entity";

@Injectable()
export class AutorisationService extends BaseService {

  constructor(@InjectRepository(AutorisationEntity) private readonly autorisationRepository:Repository<AutorisationEntity>){
      super(autorisationRepository);
    }

}
