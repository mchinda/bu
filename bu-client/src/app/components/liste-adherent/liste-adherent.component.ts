import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-adherent',
  templateUrl: './liste-adherent.component.html',
  styleUrls: ['./liste-adherent.component.css']
})
export class ListeAdherentComponent implements OnInit {
public displyedadherentColumns : string [] = ['id','created','updated','edit','delete'];
public pageSizeOptions = [5,10,50];
public length = 10;
public pageSize =5;
public pageIndex = 0;
public adherents:any;

constructor() {

 }

  ngOnInit(): void {
  }

  onPageChange(event:any){
    
  }

}
