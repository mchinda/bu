import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { AppModule } from './app.module';
import * as cors from "cors";
import * as bodyParser from "body-parser";
import * as express from "express";
async function bootstrap() {
const app = await NestFactory.create(AppModule);
let allowedOrigins = process.env.ALLOWED_ORIGIN;

  app.use(cors({
              origin: (origin, callback) => {
                  if(!origin) return callback(null, true);
                  if(allowedOrigins.indexOf(origin) == -1){
                    var msg = `The CORS policy for this site does not allow access from the specified Origin ${origin}.`;
                    return callback(new Error(msg), false);
                  }
                  return callback(null, true);
                },
                credentials: true
            }));

app.use('/', express.static(__dirname+'/public/publiotheque'));
app.use('/dashboard', express.static(__dirname+'/public/dashboard'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

  await app.listen(3000 || 4200);
}
bootstrap();
