import { Component } from '@angular/core';

@Component({
  selector: 'app-fussbereich',
  templateUrl: './fussbereich.component.html',
  styleUrls: ['./fussbereich.component.css']
})
export class FussbereichComponent  {
  fussbereich={
    fussClass:"container mb-3",
    link1:"impressum.html",
    text1:"Impressum",
    link2:"komtakt.html",
    text2:"Kontakt"
  }

  
}
