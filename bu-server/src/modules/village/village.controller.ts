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
import {VillageService} from "./village.service";
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { BaseController } from "./../../com/base.controller";

@Controller('village')
export class VillageController extends BaseController {

  constructor(private readonly villageService: VillageService) {
    super(villageService);
  }
}
