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

  // public displyedLivresColumns : string [] = ['id','titre','langue_livre','isbn','nbr_page','nbr_examplaire','image_livre','date_achat','date_parution','auteur','emprunter','domaine'];
  public displyedLivresColumns : string [] = ['id','titre','langue_livre','isbn','nbr_page','nbr_examplaire'];
  public livres:any;

  constructor(private livresService : LivreService) {

  }

  ngOnInit() {
    this.livresService.all().subscribe((result:any) => {
      console.log(result);
      this.livres = result;
    });
  }
}
