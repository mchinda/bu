import { Component, OnInit,Inject,Optional,EventEmitter,Output,Input } from '@angular/core';
import {EmprunteurService} from './../../services/emprunteur.service';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-emprunteur',
  templateUrl: './emprunteur.component.html',
  styleUrls: ['./emprunteur.component.css']
})
export class EmprunteurComponent implements OnInit {
public model_adherent:any = {
  code:"",
  nom:"",
  prenom:"",
  date_naissance:"",
  profession:"",
  sexe:"",
  adresse:"",
  telephone:"",
  email:"",
  direction:""
  // codeemprunt:""
}
  constructor(private emprunteurService: EmprunteurService,private dialog: MatDialog,
  @Optional() @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<EmprunteurComponent>) {
    console.log(data);
    this.loadData(data);
  }

  loadData(data:any){
    console.log(data);
    this.model_adherent.code = data.adherent.code;
    this.model_adherent.nom = data.adherent.nom;
    this.model_adherent.prenom= data.adherent.prenom;
    this.model_adherent.date_naissance= data.adherent.date_naissance;
    this.model_adherent.profession= data.adherent.profession;
    this.model_adherent.sexe= data.adherent.sexe;
    this.model_adherent.adresse= data.adherent.adresse;
    this.model_adherent.telephone= data.adherent.telephone;
    this.model_adherent.email= data.adherent.email;
    this.model_adherent.direction= data.adherent.direction;
  }

  ngOnInit(): void {

  }

  addOrUpdateAdherent(){
    console.log(this.model_adherent);
    this.emprunteurService.add(this.model_adherent).subscribe((result:any) =>{
      console.log(result);
    });
  }

  onNoClick(event:any){
    this.model_adherent = {};
  }

}
