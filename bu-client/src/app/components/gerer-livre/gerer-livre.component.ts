import { Component, ChangeDetectorRef,OnInit,Inject,Optional,EventEmitter,Output,Input } from '@angular/core';
import {LivreService} from './../../services/livre.service';
import {MatTableModule} from '@angular/material/table';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import {LivresComponent} from './../livres/livres.component';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-gerer-livre',
  templateUrl: './gerer-livre.component.html',
  styleUrls: ['./gerer-livre.component.css']
})
export class GererLivreComponent implements OnInit {
  public displyedLivresColumns : string [] = ['id','titre','langue_livre','isbn','nbr_page','nbr_examplaire','date_achat','date_parution','auteur','emprunter','image_livre','edit','delete'];
  public pageSizeOptions=[5,10,50];
  public length=10;
  public pageSize=5;
  public pageIndex=0;
  public livres:any;

  constructor(private livresService:LivreService,private dialog: MatDialog,
              private route : ActivatedRoute,private router:Router,
              public ref: ChangeDetectorRef) {
   }

  ngOnInit(): void {
    this.findAllLivres();
  }

editLivre(livre){
    console.log(livre);
    const dialogRef = this.dialog.open(LivresComponent,{
    width : '50%',
    data : {
      livre:livre
    }
    });

    dialogRef.afterClosed().subscribe(result => {
       if(result){
         //this.getPoste();
       }
    });
}

deleteLivre(livre:any){
  this.livresService.deleteLivre(livre).subscribe((result:any)=>{
    this.findAllLivres();
  },(err:any)=>{
    console.log(err);
  });
}

recherche(){
  console.log()
}

findAllLivres(){
    this.livresService.all().subscribe((result:any) => {
      this.livres = result;
    },(err:any) => {
      console.log(err);
    });
  }

onPageChange(event:any){

  }

}
