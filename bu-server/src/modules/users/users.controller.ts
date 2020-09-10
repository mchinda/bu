import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Req,
  Delete,
  Put,Session,Res,
  UseInterceptors,
  UploadedFile
} from '@nestjs/common';
import {UsersService} from "./users.service";
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { BaseController } from "./../../com/base.controller";
@Controller('user')
export class UsersController extends BaseController{

  constructor(private readonly userService: UsersService) {
    super(userService);
  }

}
