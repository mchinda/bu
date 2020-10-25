import { Component, OnInit,Inject,Optional,EventEmitter,Output,Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
// import {DomaineService} from './../../service/domaine.service';
import {DomaineService} from './../../services/domaine.service';


@Component({
  selector: 'app-domaine',
  templateUrl: './domaine.component.html',
  styleUrls: ['./domaine.component.css']
})
export class DomaineComponent implements OnInit {

public model_domaine:any = {
  libelle:""
};

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<DomaineComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,private domaineService: DomaineService) {
  }

  ngOnInit(): void {

  }

  confirmer(){
    this.addDomaine();
  }

  addDomaine(){
    console.log('ajout domaine');
    console.log(this.model_domaine);
    this.domaineService.add(this.model_domaine).subscribe((result:any) => {
      console.log(result);
      this.onNoClick(1);
    });
  }

  onNoClick(event:any){
    this.dialogRef.close();
  }

}
