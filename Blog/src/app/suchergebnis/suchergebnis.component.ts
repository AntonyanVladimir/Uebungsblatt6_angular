import { ArtikelService } from './../artikel.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { artikel } from '../artikel';

@Component({
  selector: 'app-suchergebnis',
  templateUrl: './suchergebnis.component.html',
  styleUrls: ['./suchergebnis.component.css']
})
export class SuchergebnisComponent implements OnInit {

  constructor(private route:ActivatedRoute, private artikelService:ArtikelService) { }
  artikels:artikel[];
  suchwort:string;
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params =>{
      this.suchwort = params.get('suchwort');
      this.artikels = this.artikelService.getArticlesBySuchwort(this.suchwort);
    })
  }

}
