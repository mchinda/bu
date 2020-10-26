import { Component, OnInit,Inject,Optional,EventEmitter,Output,Input } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-gerer-emprunts',
  templateUrl: './gerer-emprunts.component.html',
  styleUrls: ['./gerer-emprunts.component.css']
})

export class GererEmpruntsComponent implements OnInit {
  public displyedEmpruntadherentColumns:string [] = ['id','created','updated','bibliotheque','livre','adherent','edit','delete'];
  public pageSizeOptions = [5,10,50];
  public length = 10;
  public pageSize =5;
  public pageIndex = 0;
  public emprunts:any =[
    {id:1,created:"",updated:""}
  ];

  constructor() {

   }

  ngOnInit(): void {

  }

  rechercher(){
    console.log("gerer emprunt");
  }

  addEmprunt(){

  }

  onNoClick(event:any){

  }

  onPageChange(event:any){

  }

}
