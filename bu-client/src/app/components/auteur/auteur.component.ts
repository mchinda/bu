import { Component, OnInit,AfterViewInit,Output, Input, OnChanges,SimpleChanges, ViewChild, EventEmitter,Inject, Optional } from '@angular/core';
import {AuteurService} from './../../services/auteur.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatPaginatorModule, MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatMenuModule} from '@angular/material/menu';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-auteur',
  templateUrl: './auteur.component.html',
  styleUrls: ['./auteur.component.css']
})
export class AuteurComponent implements OnInit {
public displyedAuteurColumns : string [] = ['id','nom','prenom','date_naissance', 'email','site','nationalite','edit','delete'];
public auteurs:any;

@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
public pageSizeOptions = [5,10,50];
public length = 10;
public pageSize =5;
public pageIndex = 0;
public model_auteur :any = {
    nom:"",
    prenom:"",
    date_naissance:"",
    nationalite:"",
    email:"",
    site:"",
  };

  constructor(
    private auteurService:AuteurService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AuteurComponent>,
      @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {

   }

   setDataSourceAttributes() {
     if (this.paginator) {
       this.auteurs.paginator = this.paginator;
     }
   }

  onPageChange(event:any){
      this.pageIndex = event.pageIndex;
      this.pageSize = event.pageSize;
    }

    fermer(){
      this.dialogRef.close();

    }

  ngOnInit() {
    // this.auteurs.paginator = this.paginator;
    this.getAllAuteur();
  }

  getAllAuteur(){
    this.auteurService.all().subscribe((result:any) =>{
      this.auteurs = result;
      this.auteurs.paginator = this.paginator;
      console.log(result);
    });
  }

  addAuteur(){
    console.log(this.model_auteur);
    this.auteurService.add(this.model_auteur).subscribe((result:any) =>{
      this.getAllAuteur();
    });
  }

  edit(auteur:any){
    console.log(auteur);
    this.model_auteur.nom = auteur.nom;
    this.model_auteur.prenom = auteur.prenom;
    this.model_auteur.date_naissance = auteur.date_naissance;
    this.model_auteur.email = auteur.email;
    this.model_auteur.nationalite = auteur.nationalite;
    this.model_auteur.site = auteur.site;
  }

/**
**@Method deleteAutor()
*permet de supprimer un auteur
**/
  deleteAutor(auteur:any){
    this.auteurService.deleteAutor(auteur).subscribe((res:any) => {
      console.log(res);
      this.getAllAuteur();
    });
  }
}
