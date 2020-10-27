import { Component, OnInit,Inject,Optional,EventEmitter,Output,Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {BibliothequeService} from './../../services/bibliotheque.service';
import {LivresComponent} from './../livres/livres.component';
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
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private buService: BibliothequeService) {
  }

  ngOnInit(): void {

  }

getAllBu(){
  this.buService.all().subscribe((result:any) => {
    this.model_bu.nom_bu = result;
  },(err:any) =>{
    console.log(err);
  });
}

  confirmer(){
    this.addBU();
  }

  addBU(){
    this.buService.add(this.model_bu).subscribe((result:any) => {
    this.onNoClick(result);
  });

  }

  onNoClick(event){
    this.dialogRef.close(event);
  }

}
