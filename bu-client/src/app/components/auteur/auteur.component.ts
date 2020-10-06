import { Component, OnInit,Output, Input, OnChanges,SimpleChanges, ViewChild, EventEmitter,Inject, Optional } from '@angular/core';
import {AuteurService} from './../../services/auteur.service';

@Component({
  selector: 'app-auteur',
  templateUrl: './auteur.component.html',
  styleUrls: ['./auteur.component.css']
})
export class AuteurComponent implements OnInit {

  public auteur :any = {
          nom:"",
          prenom:"",
          nationalite:"",
          dateNaissance:"",
          telephone:""
        };

  constructor(private auteurService:AuteurService) {

   }

  ngOnInit(): void {

  }

  getAllAuteur(){
    this.auteurService.all().subscribe((result:any) =>{
      console.log(result);
    });
  }

  addAuteur(){
    console.log(this.auteur);
    this.auteurService.add(this.auteur).subscribe((result:any) =>{
      console.log(result);
    });
  }
}
