import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AddAtmService {

  constructor(private http: HttpClient) { }

  private baseApi = environment.apiBaseUrl;

  public addAtm(atmDto: any): Observable<any>{
    return this.http.post<any>(`${this.baseApi}/atm/add`, atmDto);
  }
}
