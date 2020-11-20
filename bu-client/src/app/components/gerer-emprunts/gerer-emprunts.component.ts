import { Component, OnInit,Inject,Optional,EventEmitter,Output,Input,ChangeDetectorRef,ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EmprunteurService} from './../../services/emprunteur.service';
import {EmpruntService} from './../../services/emprunt.service';
import {BibliothequeService} from './../../services/bibliotheque.service';
import {LivreService} from './../../services/livre.service';
import * as moment from 'moment';
import {MatTableModule,MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-gerer-emprunts',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './gerer-emprunts.component.html',
  styleUrls: ['./gerer-emprunts.component.css']
})

export class GererEmpruntsComponent implements OnInit {
  public displyedEmpruntColumns:string [] = ['id','date_emprunt','date_retour','bibliotheque','livre','adherent','rendu','edit','delete'];
  public pageSizeOptions = [3,5,10,50];
  public length = 10;
  public pageSize = 3;
  public pageIndex = 0;
  public model_reseach:any = {codeLivre:"",codeBu:"",codeEmprunt:""};
  public dataSourceEmprunts:any;
  public model_emprunts:any = {
         bibliotheque:-1,
         codeLivre:-1,
         codeAderent:-1,
         date_emprunt:"",
         date_retour:""
      };

public bus:any;
public livres:any;
public emprunteurs:any;

  constructor(private emprunteurService :EmprunteurService,
              private empruntService :EmpruntService,
              private buService: BibliothequeService,
              private livresService:LivreService,private ref: ChangeDetectorRef) {
   }

 ngOnInit() {
   this.refresh();
  }

 applyFilter(event: Event) {
     const filterValue = (event.target as HTMLInputElement).value;
     this.dataSourceEmprunts.filter = filterValue.trim().toLowerCase();
   }

  refresh(){
     this.findAll();
     this.findAllLivres();
     this.findAllBu();
     this.findAllEmprunteur();
   }

   findAll() {
     this.empruntService.allEmprunts().subscribe((result:any) => {
       this.dataSourceEmprunts = result;
     },(err:any) =>{
       console.log(err);
     });
   }

  findAllBu() {
    this.buService.all().subscribe((result:any) => {
      this.bus = result;
    },(err:any) =>{
      console.log(err);
    });
  }

   findAllLivres(){
     this.livresService.all().subscribe((result:any) => {
       this.livres = result;
     },(err:any) => {
       console.log(err);
     });
   }

   findAllEmprunteur(){
     this.emprunteurService.all().subscribe((result:any) => {
       this.emprunteurs = result;
     },(err:any) =>{
       console.log(err);
     });
   }

  rechercher(){
    console.log("gerer emprunt");
  }

  editerEmprunt(emprunt:any){
    this.model_emprunts.bibliotheque = emprunt.livre.bibliotheque.id;
    this.model_emprunts.codeLivre = emprunt.livre.id;
    this.model_emprunts.codeAderent = emprunt.emprunteur.id;
    this.model_emprunts.date_emprunt = new Date(emprunt.date_emprunt).toISOString().split('.')[0];
    this.model_emprunts.date_retour = new Date(emprunt.date_retour).toISOString().split('.')[0];
    //this.model_emprunts.rendue = emprunt.rendu;

  }

  deleteEmprunt(emprunt:any){
    this.empruntService.deleteEmprunt(emprunt).subscribe((res:any) => {
      this.findAll();
    });
  }

  addEmprunt(){
    let date_emprunt = moment(this.model_emprunts.date_emprunt).format("DD/MM/YYYY HH:mm");
    let date_retour = new Date(this.model_emprunts.date_retour).toISOString().split('.')[0];
    this.model_emprunts.date_emprunt = date_emprunt;
    this.model_emprunts.date_retour = date_retour;
    this.empruntService.add(this.model_emprunts).subscribe((result:any) => {
      this.dataSourceEmprunts.push(result);
      this.ref.detectChanges();
    },(err:any) =>{
      console.log(err);
    });
  }

  init(event:any){
    this.model_emprunts={};
  }

  onPageChange(event:any){

  }

}
