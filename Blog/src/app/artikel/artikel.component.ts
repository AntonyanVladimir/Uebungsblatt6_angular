import { Component, OnInit, Input} from '@angular/core';
import { artikel } from '../artikel';

@Component({
  selector: 'app-artikel',
  templateUrl: './artikel.component.html',
  styleUrls: ['./artikel.component.css']
})
export class ArtikelComponent implements OnInit {

  constructor() { }
  article:{

  }
  @Input("blog-article") artikel:artikel
  

  ngOnInit(): void {
  }

}
