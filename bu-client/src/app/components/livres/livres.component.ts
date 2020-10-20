import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {LivreService} from './../../services/livre.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {

  public displyedLivresColumns : string [] = ['id','created','updated','titre','langue_livre','isbn','nbr_page','nbr_examplaire','date_achat','date_parution','auteur','emprunter','edit','delete'];
  public livres:any;
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

  constructor(private livresService : LivreService) {

  }

  ngOnInit() {
    this.livresService.all().subscribe((result:any) => {
      console.log(result);
      this.livres = result;
    });
  }
}
