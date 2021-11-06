import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Locality } from '../models/locaity.model';

@Injectable({
  providedIn: 'root'
})
export class LocalitiesService {
  baseURL:string="https://api.github.com/";
 
  constructor(private http:HttpClient){
  }

  getAllLocalities(): Observable<Array<Locality>> {
       return this.http.get<Array<Locality>>('http://gapplicdev02/RmiTashtiotData/api/GeneralTableAPI/GetTablesByTablesID?tablesId=2')
  }
}
