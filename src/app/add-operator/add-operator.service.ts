import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { OperatorDto } from '../dto/OperatorDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddOperatorService {

  constructor(private http: HttpClient) { }

  private baseApi = environment.apiBaseUrl;

  public addOperator(operatorDto: any): Observable<OperatorDto>{
    return this.http.post<any>(`${this.baseApi}/operator/add`, operatorDto);
  }
}
