import { Component, OnInit,AfterViewInit,Output, Input, OnChanges,SimpleChanges, ViewChild, EventEmitter,Inject, Optional } from '@angular/core';
import {AuteurService} from './../../services/auteur.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatPaginatorModule, MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-auteur',
  templateUrl: './auteur.component.html',
  styleUrls: ['./auteur.component.css']
})
export class AuteurComponent implements OnInit {
public displyedAuteurColumns : string [] = ['id','created','updated','nom','prenom','date_naissance', 'email', 'sexe','site','nationalite','telephone','edit','delete'];
public auteurs:any;

@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
public pageSizeOptions = [5,10,50];
public length = 10;
public pageSize =5;
public pageIndex = 0;
public model_auteur :any = {
    nom:"",
    prenom:"",
    nationalite:"",
    date_naissance:"",
    site:"",
    telephone:"",
    email:"",
    sexe:""
  };

  constructor(private auteurService:AuteurService) {

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
    this.auteurService.add(this.model_auteur).subscribe((result:any) =>{
      console.log(result);
    });
  }
}
