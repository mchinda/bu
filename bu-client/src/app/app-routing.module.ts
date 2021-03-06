import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './components/user/user.component';
import {AuteurComponent} from './components/auteur/auteur.component';
import {LoginComponent} from './components/login/login.component';
import {EmprunteurComponent} from './components/emprunteur/emprunteur.component';
import {HomeComponent} from './components/home/home.component';
import { GererLivreComponent } from './components/gerer-livre/gerer-livre.component';
import { GererAdherentComponent } from './components/gerer-adherent/gerer-adherent.component';
import { GererEmpruntsComponent } from './components/gerer-emprunts/gerer-emprunts.component';
import {LivresComponent} from './components/livres/livres.component';
import { InscriptionComponent } from './components/inscription/inscription.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'inscription',component : InscriptionComponent},
  {path: 'home', component: HomeComponent,children:[
    {path:'',component: GererEmpruntsComponent},
    {path: 'gestion-livre', component: GererLivreComponent},
    {path: 'livre', component: LivresComponent},
    {path:'gerer-adherent',component: GererAdherentComponent},
    {path: 'auteur', component: AuteurComponent},
    {path: 'user', component: UserComponent},
    {path: 'adherent', component: EmprunteurComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
