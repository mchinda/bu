import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PassportModule } from '@nestjs/passport';
import { join } from 'path';
import {UsersModule} from './modules/';
@Module({
  imports: [TypeOrmModule.forRoot({
                  database : "bibliotheque",
                  type: "mysql",
                  host: "127.0.0.1",
                  username: "root",
                  port:3306,
                  password: "",
                  entities: [join(__dirname, 'modules/**/**.entity{.ts,.js}')],
                  synchronize: true,
                  // dropSchema : true
            }),
            UsersModule,
          ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
