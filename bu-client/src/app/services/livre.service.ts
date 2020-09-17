import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {BaseService} from './../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class LivreService extends BaseService {

  constructor(private _http:HttpClient) {
    super(_http,'livre');
  }


}
