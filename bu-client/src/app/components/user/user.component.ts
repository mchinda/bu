import { Component, OnInit,AfterViewInit,Output, Input, OnChanges,SimpleChanges, ViewChild, EventEmitter,Inject, Optional } from '@angular/core';
import {UserService} from './../../services/user.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginatorModule, MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  public pageSizeOptions = [5,10,50];
  public length = 10;
  public pageSize =5;
  public pageIndex = 0;
  public utilisateurs: MatTableDataSource<any[]>;

  public displyedUsersColumns : string [] = ['id','created','updated','nom','prenom','date_naissance','departement','telephone','login','etat','add','edit','delete'];

  constructor(public userService : UserService) {

  }

  ngOnInit(){
    this.getUser();
  }

getUser(){
  this.userService.all().subscribe((results:any) => {
    console.log(results);
      this.utilisateurs = results;
      console.log(this.utilisateurs);
    },(error:any) => {
      console.log(error);
    });
}
}
