import { Component, OnInit,Inject,ViewChild,Optional,EventEmitter,Output,Input } from '@angular/core';
import {EmprunteurService} from './../../services/emprunteur.service';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import * as moment from 'moment';

@Component({
  selector: 'app-emprunteur',
  templateUrl: './emprunteur.component.html',
  styleUrls: ['./emprunteur.component.css']
})
export class EmprunteurComponent implements OnInit {
@ViewChild('closebutton') closebutton;
public model_adherent:any = {
  code:"",
  nom:"",
  prenom:"",
  date_naissance: new Date(),
  profession:"",
  sexe:"",
  adresse:"",
  telephone:"",
  email:"",
  direction:""
};
  constructor(private emprunteurService: EmprunteurService,private dialog: MatDialog,
  @Optional() @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<EmprunteurComponent>) {
    console.log(data);
    if(data){
      this.loadData(data);
    }
  }

  loadData(data:any){
    this.model_adherent = data.adherent;
    this.model_adherent.date_naissance = new Date(data.adherent.date_naissance).toISOString().split('.')[0];
  }

  ngOnInit(): void {

  }

  addAdherent(){
    console.log(this.model_adherent);
    this.emprunteurService.add(this.model_adherent).subscribe((result:any) => {
      console.log(result);
    });
    this.model_adherent = {};
  }

  onNoClick(event:any){
    this.model_adherent = {};
  }

}
