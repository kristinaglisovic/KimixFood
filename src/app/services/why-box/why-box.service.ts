import { Injectable } from '@angular/core';
import { IWhyBox } from 'src/app/interfaces/IWhyBox';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WhyBoxService {

  
  constructor(private http:HttpClient) { }

  url:string= "../../../assets/data/why-box.json";

  getAllBoxes():Observable<IWhyBox[]>{
    return this.http.get<IWhyBox[]>(this.url);
 }
}
