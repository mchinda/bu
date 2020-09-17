import { Component, OnInit } from '@angular/core';
import {UserService} from './../../services/user.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private users: MatTableDataSource<any[]>;

  constructor(public userService : UserService) {

  }

  ngOnInit(){
    // this.getUser();
  }

getUser(){
  this.userService.all().subscribe((results:any) => {
      this.users = results.results;
      console.log(this.users);
    },(error:any) => {
      console.log(error);
    });
}
}
