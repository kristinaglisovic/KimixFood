import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-image',
  templateUrl: './header-image.component.html',
  styleUrls: ['./header-image.component.css']
})
export class HeaderImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scroll(e:Event, Id:string) :void
  {
       e.preventDefault();
       document.getElementById(Id).scrollIntoView({behavior: "smooth"})
       
  }

}
