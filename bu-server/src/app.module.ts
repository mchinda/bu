import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PassportModule } from '@nestjs/passport';
import { join } from 'path';
import {UsersModule,LivreModule,AuteurModule,BibliothequeModule,DomaineModule} from './modules/';

@Module({
  imports: [TypeOrmModule.forRoot({
                  database : "bibliotheque",
                  type: "mysql",
                  host: process.env.TYPEORM_HOST,
                  username: "root",
                  port:3306,
                  password: process.env.TYPEORM_PASSWORD,
                  entities: [join(__dirname, 'modules/**/**.entity{.ts,.js}')],
                  // synchronize: true,
                  // dropSchema : true
            }),
            UsersModule,
            LivreModule,
            AuteurModule,
            BibliothequeModule,
            DomaineModule
          ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
