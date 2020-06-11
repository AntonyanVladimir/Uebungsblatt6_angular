import { ArtikelService } from './../artikel.service';
import { Component, OnInit, Input } from '@angular/core';
import { artikel } from '../artikel';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BlogartikelService } from '../blogartikel.service';

@Component({
  selector: 'app-artikel-liste',
  templateUrl: './artikel-liste.component.html',
  styleUrls: ['./artikel-liste.component.css']
})
export class ArtikelListeComponent implements OnInit {

  constructor(private route:ActivatedRoute, private service:BlogartikelService) { }
   
    artikels: any;
    articleId;
    
  ngOnInit(): void {
    this.service.getArticles().subscribe((response:any)=>
    {
      this.artikels = response
    });
  }

}
