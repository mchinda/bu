import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {BaseService} from './../base/base.service';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmprunteurService extends BaseService {

  constructor(private _http:HttpClient) {
          super(_http,'emprunteur');
   }

   deleteAdherent(adherent:any){
    return this._http.post(`${environment.BASE_URL}/${this.endpoint}/delete`,adherent);
  }

}
