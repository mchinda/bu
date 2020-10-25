import { Component, OnInit,Inject,Optional,EventEmitter,Output,Input } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-gerer-emprunts',
  templateUrl: './gerer-emprunts.component.html',
  styleUrls: ['./gerer-emprunts.component.css']
})
export class GererEmpruntsComponent implements OnInit {

  constructor() {

   }

  ngOnInit(): void {

  }

  rechercher(){
    console.log("gerer emprunt");
  }

}
