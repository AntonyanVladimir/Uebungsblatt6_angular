import { artikel } from './../artikel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtikelService } from '../artikel.service';
import { BlogartikelService } from '../blogartikel.service';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
@Component({
  selector: 'app-artikel-editor',
  templateUrl: './artikel-editor.component.html',
  styleUrls: ['./artikel-editor.component.css']
})
export class ArtikelEditorComponent implements OnInit {

  
  constructor(private route: ActivatedRoute, private service:BlogartikelService, private location:Location) { }
  
  artikel:any;
  
  
  
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.getArticleFromTheRoute()
    } else{
      this.artikel = {};
      this.createBlogArticle();
      
    }
    if (this.artikel) {
      this.service.editArticle(this.artikel)
    }
  }
  getArticleFromTheRoute(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.service.getArticle(id).subscribe((response: any) => {
      this.artikel = response;
    });
  }
  createBlogArticle(){
    
  }
  save(): void {
    if(this.route.snapshot.paramMap.get('id')){
   console.log('Artikel wird Edited...');   
      this.service.editArticle(this.artikel).subscribe(() => this.goBack());
    }
    else{
      console.log('Artikel wird Created...');
      this.service.createArticle(this.artikel).subscribe(()=>console.log('Artikel wurde erstellt!!!'))
    }

  }
  goBack() {
    this.location.back();
  }
}