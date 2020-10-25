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

  }


  ngOnInit(): void {

  }

  addAdherent(){
    this.emprunteurService.add(this.model_adherent).subscribe((result:any) =>{
      console.log(result);
    });
  }

  onNoClick(event:any){
    this.dialogRef.close();
  }

}
