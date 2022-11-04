import { Component, OnInit } from '@angular/core';
import { IGallery } from 'src/app/interfaces/IGallery';
import { GalleryService } from 'src/app/services/gallery/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  Images:IGallery[]=[];

  constructor(private gs:GalleryService) { }

  ngOnInit(): void {
      this.gs.getAllImages().subscribe({
      next: data =>{
        this.Images=data;
      },
      error: err=>
      console.log(err)
    })
  }

}
