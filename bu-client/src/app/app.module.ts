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

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    AuteurComponent,
    LivresComponent,
    MenuComponent
  ],
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
    MatPaginatorModule,

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
