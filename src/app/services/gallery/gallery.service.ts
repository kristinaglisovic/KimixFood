import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGallery } from 'src/app/interfaces/IGallery';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http:HttpClient) { }

  url:string= "../../../assets/data/gallery.json";

  getAllImages():Observable<IGallery[]>{
    
    return this.http.get<IGallery[]>(this.url);
  }
}
