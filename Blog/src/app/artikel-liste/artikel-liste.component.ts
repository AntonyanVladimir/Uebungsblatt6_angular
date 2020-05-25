import { ArtikelService } from './../artikel.service';
import { Component, OnInit, Input } from '@angular/core';
import { artikel } from '../artikel';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-artikel-liste',
  templateUrl: './artikel-liste.component.html',
  styleUrls: ['./artikel-liste.component.css']
})
export class ArtikelListeComponent implements OnInit {

  constructor(private route:ActivatedRoute, private artikelService: ArtikelService) { }
   
    artikels: artikel[] = this.artikelService.getArtikels();
    articleId;
    
  ngOnInit(): void {
   
    
   
  }

}
