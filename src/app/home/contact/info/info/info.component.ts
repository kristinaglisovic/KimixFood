import { Component, OnInit } from '@angular/core';
import { IInfo } from 'src/app/interfaces/IInfo';
import { InfoService } from 'src/app/services/info/info.service';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  info:IInfo[]=[];

  constructor(private is:InfoService) { }

  ngOnInit(): void {
    this.is.getAllInfo().subscribe({
      next: data =>{
        this.info=data;
      },
      error: err=>
      console.log(err)
    })
  }

}
