import { Component, OnInit, Input } from '@angular/core';
import { artikel } from '../artikel';

@Component({
  selector: 'app-seidebar',
  templateUrl: './seidebar.component.html',
  styleUrls: ['./seidebar.component.css']
})
export class SeidebarComponent implements OnInit{
  @Input("articles") articles:artikel[];
  tagMap = new Map();
      
  ngOnInit(): void {
    
   
	// größte Häufigkeit eines Tags
	var max = 1;
	
	// Alle Artikel durchlaufen
	for (var i = 0; i < this.articles.length; i++) {
		var a = this.articles[i];
		
		// Alle Tags des Artikels durchlaufen
		for (var j = 0; j < a.tags.length; j++) {
			var tag = a.tags[j];
			// Testen, ob das Tag schon in der Map ist
			if (!(tag in this.tagMap)) {
				// Nein, taucht zum ersten Mal auf
				// --> mit Anzahl 1 in die Map schreiben
				this.tagMap[tag] = 1;
			} else {
				// war schon da, Anzahl erhöhen
				this.tagMap[tag]++;
				// Maximum ggf. anpassen
				if (this.tagMap[tag] > max) {
					max = this.tagMap[tag];
				}
			}
		}
	}
   for(let tag of this.tagMap.keys()){
     console.log(tag);
   }
   }

}
