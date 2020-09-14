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
import {AuteurService} from "./auteur.service";
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { BaseController } from "./../../com/base.controller";

@Controller('auteur')
export class AuteurController extends BaseController {

  constructor(private readonly auteurService: AuteurService) {
    super(auteurService);
  }
}
