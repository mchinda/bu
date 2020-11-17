import { Component,SimpleChanges, ChangeDetectorRef,OnInit,Inject,Optional,EventEmitter,Output,Input } from '@angular/core';
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
    bibliotheque:-1,
    domaine:-1,
    auteur:-1,
    date_parution:"",
    isbn:"",
    nbr_examplaire:"",
    date_achat:"",
    nbr_page:"",
    langue_livre:"",
    titre:"",
    image:""
  };

  constructor(private livresService : LivreService,
    private dialog: MatDialog,private buService: BibliothequeService,
    private domaineService:DomaineService, private auteurService: AuteurService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<LivresComponent>,public ref: ChangeDetectorRef) {
      if(data){
        this.editLivre(data);
      }
  }

  editLivre(data:any){
    this.model_livres = data.livre;
    this.model_livres.domaine = (data.livre && data.livre.domaine) ? data.livre.domaine.id : 0;
    this.model_livres.bibliotheque = (data.livre && data.livre.bibliotheque) ? data.livre.bibliotheque.id : 0;
    this.model_livres.auteur = (data.livre && data.livre.auteur ) ? data.livre.auteur.id : 0;
    this.model_livres.nbr_page = data.livre.nbr_page;
    this.model_livres.nbr_examplaire = data.livre.nbr_examplaire;
    this.model_livres.date_achat = new Date(data.livre.date_achat).toISOString().split('.')[0];
    this.model_livres.date_parution = new Date(data.livre.date_parution).toISOString().split('.')[0];
    }

  ngOnInit() {
    this.refresh();
 }

 ngOnChanges(changes : SimpleChanges){

  }

 findAllBu(){
   this.buService.all().subscribe((result:any) => {
     this.bus = result;
   },(err:any) => {
     console.log(err);
   });
 }

  findAllDomaine(){
    this.domaineService.all().subscribe((result:any) => {
      this.domaines = result;
    },(err:any) => {
      console.log(err);
    });
  }

  findAllAteur(){
    this.auteurService.all().subscribe((result:any) => {
      this.auteurs = result;
    },(err:any) => {
      console.log(err);
    });
  }

  addAuteur(){
    const dialogRef = this.dialog.open(AuteurComponent,{
    width : '70%',
    data : {
      domaine:""
    }
    });

  dialogRef.afterClosed().subscribe(result => {
       if(result){
         this.auteurs.push(result);
         this.findAllAteur();
       }
   });
  }

  addBU(){
    const dialogRef = this.dialog.open(BibliothequeComponent,{
    width : '25%',
    data : {
      domaine:""
    }
  });

  dialogRef.afterClosed().subscribe(result => {
       if(result){
         this.bus.push(result);
        }
   });
  }

  refresh(){
    this.findAllAteur();
    this.findAllDomaine();
    this.findAllBu();
    }

  addDomaine(){
    const dialogRef = this.dialog.open(DomaineComponent,{
    width : '25%',
    data : {
      domaine:""
    }
  });
  dialogRef.afterClosed().subscribe(result => {
       if(result){
         this.domaines.push(result);
       }
   });
  }

  addLivre(){
    if(this.data && this.data.edit != null){
      this.updateLivre();
    } else {
      this.livresService.add(this.model_livres).subscribe((result:any) => {
        this.model_livres = {
          bibliotheque:-1,domaine:-1,auteur:-1
        };
      });
    }
  }

  annuler(){
    if(this.data != null && this.data.edit == 'edit'){
      this.dialogRef.close(this.model_livres);
    }else if(this.data == null || this.data.edit != 'edit'){
      this.model_livres = {
        bibliotheque:-1,domaine:-1,auteur:-1
      };
    }
  }

updateLivre(){
    this.livresService.update(this.data.livre.id,this.data.livre).subscribe((res:any)=>{
      this.dialogRef.close(res);
    });
  }

}
