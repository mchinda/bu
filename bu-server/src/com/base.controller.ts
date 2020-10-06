import {Get,
        Request,
        Req,
        Post,
        Delete,
        Put,
        Session,
        NotFoundException,
        UnprocessableEntityException,
        UseGuards,
        Body,
        Param,
      } from "@nestjs/common";
import { Repository, UpdateWriteOpResult, DeleteResult } from 'typeorm';
import { AuthGuard } from '@nestjs/passport';
import {BaseEntity} from "./base.entity";
import {Pagination} from "./../modules/paginate";
import {JwtAuthGuard} from "./../modules/auth/guards/jwt-auth.guard";

export abstract class BaseController{
  public service:any;
  constructor(private readonly _service:any){
    this.service = _service;
  }
  @Get()
  async index(@Request() request,@Session() session): Promise<Pagination<BaseEntity>> {
    return await this.service.paginate({
      limit: request.query.hasOwnProperty('limit') ? request.query.limit : 10,
      page: request.query.hasOwnProperty('page') ? request.query.page : 0,
    });
  }

  @Get("all")
  async all():Promise<BaseEntity[]>{
    return this.service.all();
  }

  @Post("add")
  //@UseGuards(new JwtAuthGuard("jwt"))
  async create(@Body() body: any): Promise<BaseEntity> {
    return await this.service.create(body);
  }

  @Delete(":id")
  //@UseGuards(new JwtAuthGuard("jwt"))
  async delete( @Param('id') id:number ):Promise<DeleteResult>{
    const deleteObj = await this.service.findById(id);
    if (!deleteObj) {
      throw new NotFoundException();
    }
    return await this.service.destroy(id);
  }

  @Put(':id')
  //@UseGuards(new JwtAuthGuard("jwt"))
  async update(@Param('id') id: number, @Body() body: any):Promise<UpdateWriteOpResult> {
    const resp = await this.service.findById(id);
    if (!resp) {
      throw new NotFoundException();
    }
    return await this.service.update(id,{
      ...body,
    });
  }
}
