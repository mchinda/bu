import { Component, OnInit } from '@angular/core';
import {UserService} from './../../services/user.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public utilisateurs: MatTableDataSource<any[]>;

  constructor(public userService : UserService) {

  }

  ngOnInit(){
    // this.getUser();
  }

getUser(){
  this.userService.all().subscribe((results:any) => {
      this.utilisateurs = results.results;
      console.log(this.utilisateurs);
    },(error:any) => {
      console.log(error);
    });
}
}
