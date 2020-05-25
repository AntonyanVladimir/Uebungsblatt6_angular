import { artikel } from './../artikel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtikelService } from '../artikel.service';

@Component({
  selector: 'app-artikel-editor',
  templateUrl: './artikel-editor.component.html',
  styleUrls: ['./artikel-editor.component.css']
})
export class ArtikelEditorComponent implements OnInit {

  
  constructor(private route: ActivatedRoute, private artikelService: ArtikelService) { }
  artikels: artikel[] = this.artikelService.getArtikels();
  
  artikel:artikel;
  artikelId;
  
  

  ngOnInit(): void {
    this.artikelId = this.route.paramMap.subscribe(params =>{
      let id =  params.get('id');
      console.log(id);
      if(id){
      
        this.artikel = this.artikelService.getArtikelById(id);
        console.log(this.artikelId);
      } else this.artikel = this.artikels[0];
      
    })

  }

}