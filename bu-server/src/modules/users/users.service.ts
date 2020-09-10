import { Injectable,BadRequestException, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, MoreThan, MoreThanOrEqual, LessThan, LessThanOrEqual, Between, IsNull, Equal, In } from "typeorm";
import {BaseService} from "./../../com/base.service";
import {UserEntity} from "./../users/user.entity";

@Injectable()
export class UsersService extends BaseService {
  constructor(@InjectRepository(UserEntity) private readonly userRepository:Repository<UserEntity>){
    super(userRepository);
}
}
