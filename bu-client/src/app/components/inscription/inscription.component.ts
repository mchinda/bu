import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {UserService} from './../../services/user.service';
import {BibliothequeService} from './../../services/bibliotheque.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
public userIsValidated:Boolean=true;
public model_inscriotion:any = {
  nom:"",
  prenom:"",
  date_naissance:"",
  adresse:"",
  telephone:"",
  login:"",
  password:""
}

public model_bu:any = {
  nom_bu:""
};
  constructor(private route : ActivatedRoute,private router:Router,
    private userService: UserService, private buService:BibliothequeService) {

   }

  ngOnInit(): void {

  }

inscription(){
  console.log(this.model_inscriotion);
  this.userService.add(this.model_inscriotion).subscribe(result => {
    this.addBu();
    this.model_inscriotion = {};
    setTimeout(() => {
      this.userIsValidated = false;
    },500);
  },(err:any) => {
    console.log(err);
  });
}

addBu(){
  console.log(this.model_bu);
  this.buService.add(this.model_bu).subscribe(result => {
    this.model_bu = {};
  },(err:any) => {
    console.log();
  });
}

retour(){
  this.userIsValidated = true;
  this.router.navigate(['']);
}

}
