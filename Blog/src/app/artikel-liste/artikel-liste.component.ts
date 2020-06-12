import { ArtikelService } from './../artikel.service';
import { Component, OnInit, Input } from '@angular/core';
import { artikel } from '../artikel';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BlogartikelService } from '../blogartikel.service';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
@Component({
  selector: 'app-artikel-liste',
  templateUrl: './artikel-liste.component.html',
  styleUrls: ['./artikel-liste.component.css']
})
export class ArtikelListeComponent implements OnInit {

  constructor(private route:ActivatedRoute, private service:BlogartikelService, private location:Location) { }
   
    artikels: any;
    articleId;
    
  ngOnInit(): void {
    this.service.getArticles().subscribe((response:any)=>
    {
      this.artikels = response
    });
   // let article = this.service.getArticle()
  }
 // this.service.deleteArticle()
 deleteArticle(id){
   console.log('deleting...'+id);
   //let article = this.artikels.find(m=>m.id===id);
    this.service.deleteArticle(id).subscribe;
    this.location.back();
  }
  
  
}
