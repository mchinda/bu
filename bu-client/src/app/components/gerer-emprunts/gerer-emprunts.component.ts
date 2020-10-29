import { Component, OnInit,Inject,Optional,EventEmitter,Output,Input,ChangeDetectorRef,ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EmprunteurService} from './../../services/emprunteur.service';
import {EmpruntService} from './../../services/emprunt.service';
import {BibliothequeService} from './../../services/bibliotheque.service';
import {LivreService} from './../../services/livre.service';

@Component({
  selector: 'app-gerer-emprunts',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './gerer-emprunts.component.html',
  styleUrls: ['./gerer-emprunts.component.css']
})

export class GererEmpruntsComponent implements OnInit {
  public displyedEmpruntColumns:string [] = ['id','date_emprunt','date_retour','bibliotheque','livre','adherent','edit','delete'];
  public pageSizeOptions = [5,10,50];
  public length = 10;
  public pageSize =5;
  public pageIndex = 0;
  public dataSourceEmprunts:any;
  public model_reseach:any = {codeLivre:"",codeBu:"",codeEmprunt:""};

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

   findAll(){
     this.empruntService.all().subscribe((result:any) => {
       this.dataSourceEmprunts = result;
       console.log(result);
     });
   }

  ngOnInit(): void {

    this.refresh();
  }

  findAllBu(){
    this.buService.all().subscribe((result:any) => {
      this.bus = result;
    },(err:any) =>{
      console.log(err);
    });
  }

   findAllLivres(){
     this.livresService.all().subscribe((result:any) => {
       this.livres = result;
     });
   }

   findAllEmprunteur(){
     this.emprunteurService.all().subscribe((result:any) => {
       this.emprunteurs = result;
     });
   }

  rechercher(){
    console.log("gerer emprunt");
  }

  editerEmprunt(emprunt:any){
    console.log(emprunt);
  }

  deleteEmprunt(emprunt:any){
    console.log(emprunt);
  }

  addEmprunt(){
    this.empruntService.add(this.model_emprunts).subscribe((result:any) => {
      this.dataSourceEmprunts.push(result);
      this.ref.detectChanges();

    });
  }

  refresh(){
    this.findAllLivres();
    this.findAllBu();
    this.findAllEmprunteur();
    this.findAll();
  }

  init(event:any){
    this.model_emprunts={};
  }

  onPageChange(event:any){

  }

}
