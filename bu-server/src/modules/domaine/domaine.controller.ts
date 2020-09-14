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
import {DomaineService} from "./domaine.service";
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { BaseController } from "./../../com/base.controller";

@Controller('domaine')
export class DomaineController extends BaseController {

  constructor(private readonly domaineService: DomaineService) {
    super(domaineService);
  }

}
