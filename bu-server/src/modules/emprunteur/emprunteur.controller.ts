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
import {EmprunteurService} from "./emprunteur.service";
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { BaseController } from "./../../com/base.controller";

@Controller('emprunteur')
export class EmprunteurController extends BaseController {

  constructor(private readonly emprunteurService: EmprunteurService) {
    super(emprunteurService);
  }

}
