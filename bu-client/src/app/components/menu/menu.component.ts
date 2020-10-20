import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route : ActivatedRoute,private router:Router) {

  }

  ngOnInit(): void {

  }

openLivre(href:any){
  console.log(href);
  this.router.navigate(['/livre']);

}
}
