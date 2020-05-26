import { ActivatedRoute } from '@angular/router';
import { ArtikelService } from './../artikel.service';
import { Component, OnInit } from '@angular/core';
import { artikel } from '../artikel';

@Component({
  selector: 'app-tagliste',
  templateUrl: './tagliste.component.html',
  styleUrls: ['./tagliste.component.css']
})
export class TaglisteComponent implements OnInit {

  constructor(private route: ActivatedRoute, private artikelService: ArtikelService) { }
  artikels:artikel[];
  tagName:string;
  ngOnInit(): void {
    
    
    this.route.queryParamMap.subscribe(params =>{
      this.tagName = params.get('tagName');
     
      this.artikels = this.artikelService.getArtikelsByTagName(this.tagName);
      
    })
    

  }

}