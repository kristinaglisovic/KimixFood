import { Component, OnInit } from '@angular/core';
import { IWhyBox } from 'src/app/interfaces/IWhyBox';
import { WhyBoxService } from 'src/app/services/why-box/why-box.service';

@Component({
  selector: 'app-why-box',
  templateUrl: './why-box.component.html',
  styleUrls: ['./why-box.component.css']
})
export class WhyBoxComponent implements OnInit {

  boxes:IWhyBox[]=[];
  constructor(private wb:WhyBoxService) { }

  ngOnInit(): void {
    this.wb.getAllBoxes().subscribe({
      next: data =>{
        this.boxes=data;
      },
      error: err=>
      console.log(err)
    })
    
  }

}
