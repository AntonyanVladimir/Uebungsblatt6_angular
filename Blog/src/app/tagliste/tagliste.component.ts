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

  ngOnInit(): void {
    
    
    this.route.queryParamMap.subscribe(params =>{
      let tagName = params.get('tagName');
      console.log(tagName);
      this.artikels = this.artikelService.getArtikelsByTagName(tagName);
       
      console.log(this.artikels[0].autor);
      
    })
    

  }

}