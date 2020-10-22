import { Component, OnInit,Inject,Optional,EventEmitter,Output,Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-domaine',
  templateUrl: './domaine.component.html',
  styleUrls: ['./domaine.component.css']
})
export class DomaineComponent implements OnInit {

public model_domaine:any = {
  nom_domaine:""
};
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<DomaineComponent>,
  @Optional() @Inject(MAT_DIALOG_DATA) public data: any,) {
  }

  ngOnInit(): void {

  }

  confirmer(){
    this.addDomaine();
  }

  addDomaine(){
    console.log('ajout domaine');
  }

  onNoClick(event:any){
    this.dialogRef.close();
  }

}
