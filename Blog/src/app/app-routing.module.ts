import { KontaktComponent } from './kontakt/kontakt.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtikelListeComponent } from './artikel-liste/artikel-liste.component';
import { ImpressumComponent } from './impressum/impressum.component';



const routes: Routes = [
  { path: '', component:ArtikelListeComponent },
   {path:'kontakt', component: KontaktComponent},
   {path:'impressum', component: ImpressumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
