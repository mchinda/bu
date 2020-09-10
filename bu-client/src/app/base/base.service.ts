import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { environment } from './../../environments/environment';

export class BaseService {
  constructor(public http:HttpClient,public endpoint:string) {

  }

  add(model:any):Observable<any>{
    console.log("BaseService to add posteUser...");
    console.log(model);
    return this.http.post(`${environment.BASE_URL}/${this.endpoint}/add`,model);

  }


  findById(id:number):Observable<any>{
    return this.http.get(`${environment.BASE_URL}/${this.endpoint}/findById/`+id);
  }

  all(){
    return this.http.get(`${environment.BASE_URL}/${this.endpoint}/all`);
  }

  getWithLimit(_limit:any,_offset:any){
    return this.http.get(`${environment.BASE_URL}/${this.endpoint}`,{params : {page:_offset,limit:_limit},withCredentials: true});
  }

  update(id,data:any){
    return this.http.put(`${environment.BASE_URL}/${this.endpoint}/${id}`,data);
  }

}
