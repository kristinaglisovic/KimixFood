import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IInfo } from 'src/app/interfaces/IInfo';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  constructor(private http:HttpClient) { }

  url:string= "../../../assets/data/info.json";

  getAllInfo(): Observable<IInfo[]>{
    return this.http.get<IInfo[]>(this.url);
  }
}
