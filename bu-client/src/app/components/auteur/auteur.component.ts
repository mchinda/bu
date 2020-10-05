import { Component, OnInit,Output, Input, OnChanges,SimpleChanges, ViewChild, EventEmitter,Inject, Optional } from '@angular/core';

@Component({
  selector: 'app-auteur',
  templateUrl: './auteur.component.html',
  styleUrls: ['./auteur.component.css']
})
export class AuteurComponent implements OnInit {

  public auteur :any = {
          nom:"",
          prenom:"",
          telephone:"",
          dateNaissance:"",
          nationalite:"",
          sexe:""
        };
  constructor() { }

  ngOnInit(): void {
  }

  addAuteur(){

  }

}
