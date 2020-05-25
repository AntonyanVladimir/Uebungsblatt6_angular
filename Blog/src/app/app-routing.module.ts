import { ArtikelDetailsComponent } from './artikel-details/artikel-details.component';
import { ArtikelComponent } from './artikel/artikel.component';
import { TaglisteComponent } from './tagliste/tagliste.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtikelListeComponent } from './artikel-liste/artikel-liste.component';
import { ImpressumComponent } from './impressum/impressum.component';



const routes: Routes = [
  { path: '', component: ArtikelListeComponent },
  {path:'articles/:id', component: ArtikelDetailsComponent},
  {path:'articles', component: ArtikelListeComponent},
   {path:'kontakt', component: KontaktComponent},
   {path:'impressum', component: ImpressumComponent},
   {path:'tagliste', component: TaglisteComponent},
  { path: '**', component: NotFoundComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
