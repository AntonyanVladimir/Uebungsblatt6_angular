import { Component, OnInit, Input } from '@angular/core';
import { artikel } from '../artikel';
import { ActivatedRoute } from '@angular/router';
import { ArtikelService } from '../artikel.service';



@Component({
  selector: 'app-seidebar',
  templateUrl: './seidebar.component.html',
  styleUrls: ['./seidebar.component.css']
})
export class SeidebarComponent implements OnInit{
  constructor(private route:ActivatedRoute, private articleService:ArtikelService){

  }
  
  tagMap = new Map();
  math = Math;
  max:number;    
  articles:artikel[];
  artikelId:number;
  suchwort:string;
   getGroesse(tag:number) {
	return Math.ceil(Math.floor(tag / (this.max / 5.0)));
  }
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params =>{
      this.suchwort = params.get('suchwort');
      this.articles = this.articleService.getArticlesBySuchwort(this.suchwort);
      console.log(this.articles[0].autor);
      this.artikelId = +params.get('artikelId');
     
      
      
    })
    




	// größte Häufigkeit eines Tags

	// Alle Artikel durchlaufen
	
// 	for (var i = 0; i < this.articles.length; i++) {
// 		let a = this.articles[i];
		
// 		// Alle Tags des Artikels durchlaufen
// 		for (var j = 0; j < a.tags.length; j++) {
// 			var tag = a.tags[j];
// 			// Testen, ob das Tag schon in der Map ist
// 			if (!(this.tagMap.has(tag))) {
// 				// Nein, taucht zum ersten Mal auf
// 				// --> mit Anzahl 1 in die Map schreiben
// 				this.tagMap.set(tag,1);
// 			} else {
// 				// war schon da, Anzahl erhöhen
// 			let aktuellerTag = this.tagMap.get(tag);
// 				aktuellerTag++;
// 				// Maximum ggf. anpassen
// 				if (aktuellerTag > this.max) {
// 					this.max = aktuellerTag;
// 				}
// 			}
			
			
// 		}
		
//   }

   }

}
