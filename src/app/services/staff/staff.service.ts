import { Injectable } from '@angular/core';
import { IStaff } from 'src/app/interfaces/IStaff';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http:HttpClient) { }

  url:string= "../../../assets/data/staff.json";

  getAllStaff():Observable<IStaff[]>{
    return this.http.get<IStaff[]>(this.url);
  }
}
