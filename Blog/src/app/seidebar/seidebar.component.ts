import { BlogartikelService } from './../blogartikel.service';
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
  constructor(private route:ActivatedRoute, private service:BlogartikelService){
  }
  //[[],[],[]]
  tagListe:any;
  suchwort:string;
  maxVorkommendeTagCount:number;
  getGroesse(tagName){
    let maxVorkommendeTagCount = this.Berechnen();
    let allTagCount = 0;
     let absuluteHäufigkeit = tagName[1];
     let relativeHäufigkeit = absuluteHäufigkeit/allTagCount;
     var size = Math.ceil(absuluteHäufigkeit/(maxVorkommendeTagCount/ 5.0));
     
     return size;
  }
  Berechnen(){
    let max = 1;
    for(let tag of this.tagListe){
        if(tag[1]>max)
        max = tag[1];
    }
    return max;
  }
  ngOnInit(): void {
    this.service.getBlogsTagMap().subscribe((response:any)=>{
      this.tagListe = response;
     console.log(this.tagListe);
    });

   }

}
