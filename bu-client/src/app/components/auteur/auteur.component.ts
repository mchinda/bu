import { Component, ChangeDetectorRef,OnInit,AfterViewInit,Output, Input, OnChanges,SimpleChanges, ViewChild, EventEmitter,Inject, Optional } from '@angular/core';
import {AuteurService} from './../../services/auteur.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatPaginatorModule, MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatMenuModule} from '@angular/material/menu';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import * as moment from 'moment';

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
public pageSize = 5;
public pageIndex = 0;
public model_auteur :any = {
    id:"",
    nom:"",
    prenom:"",
    date_naissance:"",
    nationalite:"",
    email:"",
    site:"",
  };
  public action:any ={
    add:"",
    edit:""
  }

  constructor(
    private auteurService:AuteurService,
    public dialog: MatDialog, public changeDetectorRefs: ChangeDetectorRef,
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

  ngOnInit() {
    this.getAllAuteur();
  }

  getAllAuteur(){
    this.auteurService.all().subscribe((result:any) => {
      this.auteurs = result;
    });
  }

  addAuteur(add:any){
    this.action.add = add;
    this.model_auteur.date_naissance = moment(this.model_auteur.date_naissance).format("DD/MM/YYYY HH:mm");
    if(this.action.edit == '' && this.action.add == 'add'){
      this.auteurService.add(this.model_auteur).subscribe((result:any) =>{
        this.auteurs.push(result);
        this.getAllAuteur();
        this.model_auteur = {};
      },(err_add)=>{
        console.log(err_add);
      });

    }else if(this.action.edit =='edit'){
      this.auteurService.update(this.model_auteur.id,this.model_auteur).subscribe((result:any) =>{
        this.auteurs.push(result);
        this.getAllAuteur();
        this.model_auteur = {};
      },(err_update)=>{
        console.log(err_update);
      });
    }
    this.annuler();
  }

  annuler(){
    this.dialogRef.close(this.auteurs);
    this.model_auteur = {};
  }

  edite(auteur:any,edit:any){
    this.action.edit = edit;
    this.action.add = "";
    this.model_auteur = auteur;
    this.model_auteur.date_naissance = new Date(auteur.date_naissance).toISOString().split('.')[0];

  }

/**
**@Method deleteAutor()
*permet de supprimer un auteur
**/
  deleteAutor(auteur:any){
    this.auteurService.deleteAutor(auteur).subscribe((res:any) => {
      this.getAllAuteur();
    });
  }
}
