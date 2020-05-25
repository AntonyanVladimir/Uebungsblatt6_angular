import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtikelComponent } from './artikel/artikel.component';
import { KopfbereichComponent } from './kopfbereich/kopfbereich.component';
import { FussbereichComponent } from './fussbereich/fussbereich.component';
import { SeidebarComponent } from './seidebar/seidebar.component';
import { ArtikelListeComponent } from './artikel-liste/artikel-liste.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TaglisteComponent } from './tagliste/tagliste.component';


@NgModule({
  declarations: [
    AppComponent,
    ArtikelComponent,
    KopfbereichComponent,
    FussbereichComponent,
    SeidebarComponent,
    ArtikelListeComponent,
    NotFoundComponent,
    TaglisteComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
