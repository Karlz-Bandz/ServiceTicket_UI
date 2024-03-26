import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddOperatorService {

  constructor(private http: HttpClient) { }

  private baseApi = environment.apiBaseUrl;

  public registerOperator(operator: any): Observable<void>{
    return this.http.post<void>(`${this.baseApi}/operator/register`, operator);
  }

  public registerAdmin(operator: any): Observable<void>{
    return this.http.post<void>(`${this.baseApi}/operator/register/admin`, operator);
  }
}
