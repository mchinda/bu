import { Component, OnInit } from '@angular/core';
import {LivreService} from './../../services/livre.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-gerer-livre',
  templateUrl: './gerer-livre.component.html',
  styleUrls: ['./gerer-livre.component.css']
})
export class GererLivreComponent implements OnInit {
  public displyedLivresColumns : string [] = ['id','created','updated','titre','langue_livre','isbn','nbr_page','nbr_examplaire','date_achat','date_parution','auteur','emprunter','image_livre','edit','delete'];
  public pageSizeOptions = [5,10,50];
  public length = 10;
  public pageSize =5;
  public pageIndex = 0;
  public livres:any;

  constructor(private livresService:LivreService) {

   }

  ngOnInit(): void {
    this.findAllLivres();
  }

recherche(){
  console.log()
}
  findAllLivres(){
    this.livresService.all().subscribe((result:any) => {
      console.log(result);
      this.livres = result;
      console.log(this.livres)
    });
  }

  onPageChange(event:any){

  }

}
