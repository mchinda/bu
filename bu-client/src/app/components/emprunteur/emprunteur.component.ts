import { Component, OnInit } from '@angular/core';

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
  email:""
  // codeemprunt:""
}
  constructor() { }

  ngOnInit(): void {
  }

}
