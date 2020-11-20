import { Component, ChangeDetectorRef,OnInit,Inject,Optional,EventEmitter,Output,Input } from '@angular/core';
import {LivreService} from './../../services/livre.service';
import {MatTableModule,MatTableDataSource} from '@angular/material/table';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import {LivresComponent} from './../livres/livres.component';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-gerer-livre',
  templateUrl: './gerer-livre.component.html',
  styleUrls: ['./gerer-livre.component.css']
})
export class GererLivreComponent implements OnInit {
  public displyedLivresColumns : string [] = ['id','titre','langue_livre','isbn','nbr_page','nbr_examplaire','date_achat','date_parution','auteur','domaine','bibliotheque','image_livre','edit','delete'];
  public pageSizeOptions=[5,10,50];
  public length=10;
  public pageSize=5;
  public pageIndex=0;
  public livres :any;

  constructor(private livresService:LivreService,private dialog: MatDialog,
              private route : ActivatedRoute,private router:Router,
              public ref: ChangeDetectorRef) {
   }

  ngOnInit(): void {
    this.findAllLivres();
  }

editLivre(livre:any){
  console.log(livre);
    const dialogRef = this.dialog.open(LivresComponent,{
    width : '50%',
    data : {
      edit:'edit',
      livre:livre
    }
    });

    dialogRef.afterClosed().subscribe(result => {
       if(result){
         // this.getPoste();
         this.findAllLivres();
         }
      },(err:any) => {
        console.log(err);
      });
  }

deleteLivre(livre:any){
  this.livresService.deleteLivre(livre).subscribe((result:any) => {
    this.findAllLivres();
  },(err:any) => {
    console.log(err);
  });
}

applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.livres.filter = filterValue.trim().toLowerCase();
  }

findAllLivres(){
    this.livresService.allLivres().subscribe((result:any) => {
      console.log(result);
      this.livres = new MatTableDataSource(result);
      console.log(this.livres);
    },(err:any) => {
      console.log(err);
    });
  }

onPageChange(event:any){

  }

}
