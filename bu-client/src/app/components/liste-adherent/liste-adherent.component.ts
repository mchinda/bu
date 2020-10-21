import { Component, OnInit } from '@angular/core';
import {EmprunteurService} from './../../services/emprunteur.service';

@Component({
  selector: 'app-liste-adherent',
  templateUrl: './liste-adherent.component.html',
  styleUrls: ['./liste-adherent.component.css']
})
export class ListeAdherentComponent implements OnInit {
public displyedadherentColumns : string [] =
                                      ['id','created','updated',
                                      'code','nom','prenom','date_naissance','profession',
                                      'sexe','adresse','telephone','direction','email',
                                      'edit','delete'];

public pageSizeOptions = [5,10,50];
public length = 10;
public pageSize =5;
public pageIndex = 0;
public adherents:any;

constructor(private emprunteurService:EmprunteurService) {

 }

  ngOnInit() {
    this.findAll();
  }

findAll() {
  this.emprunteurService.all().subscribe((result:any) =>{
    this.adherents = result;
    console.log(this.adherents);
  });
}


  onPageChange(event:any){

  }

}
