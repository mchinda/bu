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
import {BibliothequeService} from "./bibliotheque.service";
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { BaseController } from "./../../com/base.controller";

@Controller('bibliotheque')
export class BibliothequeController extends BaseController {

  constructor(private readonly buService: BibliothequeService) {
    super(buService);
  }

}
