import { Component, OnInit,Inject,Optional,EventEmitter,Output,Input } from '@angular/core';
import {EmprunteurService} from './../../services/emprunteur.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EmprunteurComponent} from './../emprunteur/emprunteur.component';
import {MatTableModule,MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-gerer-adherent',
  templateUrl: './gerer-adherent.component.html',
  styleUrls: ['./gerer-adherent.component.css']
})
export class GererAdherentComponent implements OnInit {
public displyedadherentColumns : string [] = ['id','code','nom','prenom','date_naissance','profession','sexe','adresse','telephone','direction','email','edit','delete'];

public pageSizeOptions = [5,10,50];
public length = 10;
public pageSize = 5;
public pageIndex = 0;
public adherents:any;

constructor(private emprunteurService:EmprunteurService,private route : ActivatedRoute,
  private router:Router,private dialog: MatDialog) {

 }

applyFilter(event: Event) {
  console.log(event);
    const filterValue = (event.target as HTMLInputElement).value;
    this.adherents.filter = filterValue.trim().toLowerCase();
  }

 ngOnInit() {
   this.findAll();
 }

deleteAdherent(adherent:any){
  this.emprunteurService.deleteAdherent(adherent).subscribe(result =>{
    this.findAll();
  },(err:any)=>{
    console.log(err);
  });
}

editerAdherent(adherent:any){
  const dialogRef = this.dialog.open(EmprunteurComponent,{
  width : '50%',
  // height :'30%',
  data : {
    edit:'edit',
    adherent:adherent
  }
  });

  dialogRef.afterClosed().subscribe(result => {
     if(result){
       console.log(result);
      }
  },(err:any)=>{
    console.log(err);
  });

}

findAll() {
  this.emprunteurService.all().subscribe((result:any) =>{
    this.adherents = new MatTableDataSource(result);
  },(err:any)=>{
    console.log(err);
  });
}

  onPageChange(event:any){

  }

}
