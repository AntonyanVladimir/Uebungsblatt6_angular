import { artikel } from './../artikel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artikel-editor',
  templateUrl: './artikel-editor.component.html',
  styleUrls: ['./artikel-editor.component.css']
})
export class ArtikelEditorComponent implements OnInit {

  constructor() { }
  artikel:artikel;

  ngOnInit(): void {
    
  }

}
