import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {LivreService} from './../../services/livre.service';
import {MatTableModule} from '@angular/material/table';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DomaineComponent} from './../domaine/domaine.component';
import {BibliothequeComponent} from './../bibliotheque/bibliotheque.component';
import {AuteurComponent} from './../auteur/auteur.component';
import {VillageService} from './../../services/village.service';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {

  public displyedLivresColumns : string [] = ['id','created','updated','titre','langue_livre','isbn','nbr_page','nbr_examplaire','date_achat','date_parution','auteur','emprunter','edit','delete'];
  public livres:any;
  public villages:any;
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
    private dialog: MatDialog,private villageService: VillageService) {

  }

  ngOnInit() {
    this.findAll();
    this.getVillage();
 }

 getVillage(){
   this.villageService.all().subscribe((result:any) => {
     this.villages = result;
     console.log(result,this.villages);
   },(err:any) =>{
     console.log(err);
   });
 }

  findAll(){
    this.livresService.all().subscribe((result:any) => {
      console.log(result);
      this.livres = result;
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
}
