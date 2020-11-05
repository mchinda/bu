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

import {LivreService} from "./livre.service";
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { BaseController } from "./../../com/base.controller";

@Controller('livre')
export class LivreController extends BaseController {

  constructor(private readonly livreService: LivreService) {
    super(livreService);
  }


    @Post('delete')
    async deleteLivre(@Body() body:any){
      return await this.livreService.deleteLivre(body);
     }


}
