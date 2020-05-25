import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtikelComponent } from './artikel/artikel.component';
import { KopfbereichComponent } from './kopfbereich/kopfbereich.component';
import { FussbereichComponent } from './fussbereich/fussbereich.component';
import { SeidebarComponent } from './seidebar/seidebar.component';
import { ArtikelListeComponent } from './artikel-liste/artikel-liste.component';
import { ArtikelEditorComponentComponent } from './artikel-editor-component/artikel-editor-component.component';
import { ImpressumComponentComponent } from './impressum-component/impressum-component.component';
import { KontaktComponentComponent } from './kontakt-component/kontakt-component.component';
import { ArtikelShareComponentComponent } from './artikel-share-component/artikel-share-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtikelComponent,
    KopfbereichComponent,
    FussbereichComponent,
    SeidebarComponent,
    ArtikelListeComponent,
    ArtikelEditorComponentComponent,
    ImpressumComponentComponent,
    KontaktComponentComponent,
    ArtikelShareComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
