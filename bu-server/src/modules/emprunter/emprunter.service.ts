import { Injectable,BadRequestException, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, MoreThan, MoreThanOrEqual, LessThan, LessThanOrEqual, Between, IsNull, Equal, In } from "typeorm";
import {BaseService} from "./../../com/base.service";
import {EmprunterEntity} from "./../emprunter/emprunter.entity";

@Injectable()
export class EmprunterService extends BaseService {

  constructor(@InjectRepository(EmprunterEntity) private readonly emprunterRepository:Repository<EmprunterEntity>){
    super(emprunterRepository);
  }

}
