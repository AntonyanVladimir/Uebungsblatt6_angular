import { Component} from '@angular/core';
import { Http2ServerRequest } from 'http2';

@Component({
  selector: 'app-kopfbereich',
  templateUrl: './kopfbereich.component.html',
  styleUrls: ['./kopfbereich.component.css']
})
export class KopfbereichComponent {
  headerText="Web By Step - Beispielblog";
    headerLogo={
      title:"Logo",
      src:"assets/linux-tux.svg",
      alt:"Logo",
      class:"logo"
    };
    

  }
  

 


