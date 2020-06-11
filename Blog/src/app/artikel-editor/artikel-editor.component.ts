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
    this.getArticleFromTheRoute()
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
  save(): void {
    this.service.editArticle(this.artikel).subscribe(() => this.goBack());
  }
  goBack() {
    this.location.back();
  }
}