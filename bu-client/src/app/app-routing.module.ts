import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './components/user/user.component';
import {LivresComponent} from './components/livres/livres.component';
import {AuteurComponent} from './components/auteur/auteur.component';

const routes: Routes = [
  {path: 'livre', component: LivresComponent},
  {path: '', component: AuteurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
