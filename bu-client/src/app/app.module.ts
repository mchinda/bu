import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Component,ApplicationRef,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { AuteurComponent } from './components/auteur/auteur.component';
import { LivresComponent } from './components/livres/livres.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule, MatPaginator} from '@angular/material/paginator';
import { NgxPaginationModule} from 'ngx-pagination';
import { MatMenuModule} from '@angular/material/menu';
import { MenuComponent } from './components/menu/menu.component';
import { EmprunteurComponent } from './components/emprunteur/emprunteur.component';
import { ListeAdherentComponent } from './components/liste-adherent/liste-adherent.component';
import { DomaineComponent } from './components/domaine/domaine.component';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HomeComponent } from './components/home/home.component';
import { BibliothequeComponent } from './components/bibliotheque/bibliotheque.component';
import { GererLivreComponent } from './components/gerer-livre/gerer-livre.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    AuteurComponent,
    LivresComponent,
    MenuComponent,
    EmprunteurComponent,
    ListeAdherentComponent,
    DomaineComponent,
    HomeComponent,
    BibliothequeComponent,
    GererLivreComponent,
  ],
  entryComponents: [DomaineComponent,BibliothequeComponent,AuteurComponent],
  imports: [
    BrowserModule,
    MatMenuModule,
    HttpClientModule,
    MatTableModule,
    MatTabsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatPaginatorModule, MatDialogModule,

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [{provide:MatDialogRef, useValue: 'fr'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
