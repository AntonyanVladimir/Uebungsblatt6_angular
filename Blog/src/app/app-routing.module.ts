import { ArtikelEditorComponent } from './artikel-editor/artikel-editor.component';
import { ArtikelComponent } from './artikel/artikel.component';
import { TaglisteComponent } from './tagliste/tagliste.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtikelListeComponent } from './artikel-liste/artikel-liste.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { SuchergebnisComponent } from './suchergebnis/suchergebnis.component';
import { TagsDesBlogsComponent } from './tags-des-blogs/tags-des-blogs.component';



const routes: Routes = [
  { path: '', component: ArtikelListeComponent },
  { path: 'articles/:id', component: ArtikelComponent },
  { path: 'articles', component: ArtikelListeComponent },
  { path: 'artikel-editor/:id', component: ArtikelEditorComponent },
  { path: 'articles/artikel-editor/:id', component: ArtikelEditorComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'tagliste', component: TaglisteComponent },
  { path: 'suchergebnis', component: SuchergebnisComponent },
  { path: 'tags', component:TagsDesBlogsComponent},
  //{ path: ''},
  //{ path: 'tagliste/:tagName', component: TaglisteComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
