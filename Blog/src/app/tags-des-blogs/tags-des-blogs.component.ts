import { Component, OnInit } from '@angular/core';
import { BlogartikelService } from '../blogartikel.service';

@Component({
  selector: 'app-tags-des-blogs',
  templateUrl: './tags-des-blogs.component.html',
  styleUrls: ['./tags-des-blogs.component.css']
})
export class TagsDesBlogsComponent implements OnInit {
  // tagMap:Map<string, number>;
  tagListe:any
  constructor(private service:BlogartikelService) { }

  ngOnInit(): void {
    this.service.getBlogsTagMap().subscribe((response:any)=>{
      this.tagListe = response;
    });
  }

}
