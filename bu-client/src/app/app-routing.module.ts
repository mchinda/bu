import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './components/user/user.component';
import {LivresComponent} from './components/livres/livres.component';
import {AuteurComponent} from './components/auteur/auteur.component';
import {LoginComponent} from './components/login/login.component';
import {EmprunteurComponent} from './components/emprunteur/emprunteur.component';


const routes: Routes = [
  {path: 'livre', component: LivresComponent},
  {path: 'auteur', component: AuteurComponent},
  {path: 'user', component: UserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'emprunteur', component: EmprunteurComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
