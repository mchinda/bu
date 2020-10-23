import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {LivreService} from './../../services/livre.service';
import {MatTableModule} from '@angular/material/table';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DomaineComponent} from './../domaine/domaine.component';
import {BibliothequeComponent} from './../bibliotheque/bibliotheque.component';
import {AuteurComponent} from './../auteur/auteur.component';
import {BibliothequeService} from './../../services/bibliotheque.service';
import {DomaineService} from './../../services/domaine.service';
import {AuteurService} from './../../services/auteur.service';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {


  public bus:any;
  public domaines:any;
  public auteurs:any;

  public model_livres:any = {
    domaine:"",
    date_parution:"",
    isbn:"",
    nbr_examplaire:"",
    auteur:"",
    date_achat:"",
    nbr_page:"",
    langue:"",
    titre:"",
    image:""
  }

  constructor(private livresService : LivreService,
    private dialog: MatDialog,private buService: BibliothequeService,
    private domaineService:DomaineService, private auteurService: AuteurService) {

  }

  ngOnInit() {
    // this.findAllLivres();
    this.findAllBu();
    this.findAllDomaine();
    this.findAllAteur();
 }

 findAllBu(){
   console.log('findAllBu');
   this.buService.all().subscribe((result:any) => {
     console.log(result);
     this.bus = result;
     console.log(result,this.bus);
   },(err:any) =>{
     console.log(err);
   });
 }

  findAllDomaine(){
    this.domaineService.all().subscribe((result:any) => {
      console.log(result);
      this.domaines = result;
    });
  }

  findAllAteur(){
    this.auteurService.all().subscribe((result:any) => {
      console.log(result);
      this.auteurs = result;
    });
  }


  addAuteur(){
    const dialogRef = this.dialog.open(AuteurComponent,{
    width : '70%',
    // height :'30%',
    data : {
      domaine:""
    }
    });

  dialogRef.afterClosed().subscribe(result => {
       if(result){
         // this.getPoste();
       }
   });

  }

  addBU(){
    console.log('bu');
    const dialogRef = this.dialog.open(BibliothequeComponent,{
    width : '20%',
    // height :'30%',
    data : {
      domaine:""
    }
  });

  dialogRef.afterClosed().subscribe(result => {
       if(result){
         // this.getPoste();
       }
   });
  }

  addDomaine(){
    const dialogRef = this.dialog.open(DomaineComponent,{
    width : '20%',
    // height :'30%',
    data : {
      domaine:""
    }
  });

  dialogRef.afterClosed().subscribe(result => {
       if(result){
         // this.getPoste();
       }
   });
  }

  addLivre(){
    this.livresService.add(this.model_livres).subscribe((result:any) => {
      console.log(result);
      //this.livres = result;
    });
  }

editLivre(livre:any){
  console.log(livre);
  this.model_livres.domaine = livre.domaine;
  this.model_livres.date_parution = livre.date_parution;
  this.model_livres.isbn = livre.isbn;
  this.model_livres.nbr_examplaire = livre.nbr_examplaire;
  this.model_livres.auteur = livre.auteur;
  this.model_livres.date_achat = livre.date_achat;
  this.model_livres.nbr_page = livre.nbr_page;
  this.model_livres.langue = livre.langue_livre;
  this.model_livres.titre = livre.titre;
  this.model_livres.image = livre.image;

  }

  deleteLivre(livre:any){
    // console.log(livre);
    // this.livresService.delete(livre.id).subscribe((result:any) => {
    //   console.log(result);
    // });
  }
}
