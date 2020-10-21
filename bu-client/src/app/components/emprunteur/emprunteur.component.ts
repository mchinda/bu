import { Component, OnInit } from '@angular/core';
import {EmprunteurService} from './../../services/emprunteur.service';

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
  constructor(private emprunteurService: EmprunteurService) { }

  ngOnInit(): void {

  }

  addAdherent(){
    this.emprunteurService.add(this.model_adherent).subscribe((result:any) =>{
      console.log(result);
    });
  }

}
