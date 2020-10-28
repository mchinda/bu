import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {BaseService} from './../base/base.service';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpruntService extends BaseService {

  constructor(private _http:HttpClient) {
          super(_http,'emprunt');
   }


}
