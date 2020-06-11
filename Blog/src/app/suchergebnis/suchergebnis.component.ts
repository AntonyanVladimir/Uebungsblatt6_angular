import { ArtikelService } from './../artikel.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { artikel } from '../artikel';
import { BlogartikelService } from '../blogartikel.service';

@Component({
  selector: 'app-suchergebnis',
  templateUrl: './suchergebnis.component.html',
  styleUrls: ['./suchergebnis.component.css']
})
export class SuchergebnisComponent implements OnInit {

  constructor(private route:ActivatedRoute, private service: BlogartikelService) { }
  artikels:any[];
  
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params =>{
      let suchwort = params.get('suchwort');
      this.service.getArticleByTagName(suchwort).subscribe((response:any)=>{
        this.artikels = response;
      });
    })
  }

}
