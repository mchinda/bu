import { Component, OnInit,Inject,Optional,EventEmitter,Output,Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-bibliotheque',
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.css']
})
export class BibliothequeComponent implements OnInit {

public model_bu:any = {
  nom_bu:""
};

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<BibliothequeComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,) {
  }

  ngOnInit(): void {
  }


  confirmer(){
    this.addBU();
  }

  addBU(){
    console.log('ajout dune bu');
  }

  onNoClick(event:any){
    this.dialogRef.close();
  }

}
