import { Component, OnInit,Inject,Optional,EventEmitter,Output,Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {VillageService} from './../../services/village.service';

@Component({
  selector: 'app-bibliotheque',
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.css']
})
export class BibliothequeComponent implements OnInit {

public villages:any;

public model_bu:any = {
  nom_bu:""
};

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<BibliothequeComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,private villageService: VillageService) {
  }

  ngOnInit(): void {
    this.getVillage();
  }

getVillage(){
  this.villageService.all().subscribe((result:any) => {
    this.villages = result;
    console.log(result,this.villages);
  },(err:any) =>{
    console.log(err);
  });
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
