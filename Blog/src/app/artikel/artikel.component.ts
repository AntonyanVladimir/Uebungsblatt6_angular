import { ArtikelService } from './../artikel.service';
import { Component, OnInit, Input} from '@angular/core';
import { artikel } from '../artikel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artikel',
  templateUrl: './artikel.component.html',
  styleUrls: ['./artikel.component.css']
})
export class ArtikelComponent implements OnInit {

  constructor(private route:ActivatedRoute, private artikelService:ArtikelService) { }
  artikels: artikel[] = this.artikelService.getArtikels();

  artikelId;
  @Input('app-artikel') artikel:artikel;
  isCompact:boolean;
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params =>{
      let display = params.get('display');
      console.log(display);
      if(display === 'compact'){
        this.isCompact = true;
      } else this.isCompact = false;
    })
    
    this.artikelId = this.route.paramMap.subscribe(params =>{
      let id =  params.get('id');
   
     
      
      if(id){
        this.artikelId = +id;
        this.artikel = this.artikels[this.artikelId];
      }
      
    })

  }

}