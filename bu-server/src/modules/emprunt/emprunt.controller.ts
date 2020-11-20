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
import {EmpruntService} from "./Emprunt.service";
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { BaseController } from "./../../com/base.controller";

@Controller('Emprunt')
export class EmpruntController extends BaseController {

  constructor(private readonly empruntService: EmpruntService) {
    super(empruntService);
  }

 @Get('get-emprunt')
 async allEmprunts(){
   return await this.empruntService.allEmprunt();
  }

  @Post('delete')
  async deleteEmprunt(@Body() body:any){
    return await this.empruntService.deleteEmprunt(body);
   }

}
