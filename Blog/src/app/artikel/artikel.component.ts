import { ArtikelService } from './../artikel.service';
import { Component, OnInit, Input} from '@angular/core';
import { artikel } from '../artikel';
import { ActivatedRoute } from '@angular/router';
import { BlogartikelService } from '../blogartikel.service';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-artikel',
  templateUrl: './artikel.component.html',
  styleUrls: ['./artikel.component.css']
})
export class ArtikelComponent implements OnInit {

  constructor(private route:ActivatedRoute, private blogartikelService:BlogartikelService) { }
  @Input('app-artikel') artikel:any;
  
  confirmDelete:boolean;
  isCompact:boolean;
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params =>{
      let display = params.get('display');
      
      if(display === 'compact'){
        this.isCompact = true;
      } else this.isCompact = false;
    })
    
    let id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.blogartikelService.getArticle(id).subscribe((response:any)=>{
        this.artikel = response;
      });
    }
      
  }
  deleteArticle(){
         this.blogartikelService.deleteArticle(this.artikel.id)
         .subscribe(()=>console.log('Wurde erfolgreich gelöscht.'), 
         (err)=>{console.log(err)});
     }
   
  


}