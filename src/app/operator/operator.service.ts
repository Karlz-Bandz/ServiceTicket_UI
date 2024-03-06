import { Injectable } from '@angular/core';
import { OperatorDto } from '../dto/OperatorDto';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {

  constructor(private http: HttpClient) { }

  private baseApi = environment.apiBaseUrl;

  public addOperator(operatorDto: OperatorDto): Observable<OperatorDto>{
    return this.http.post<OperatorDto>(`${this.baseApi}/operator/add`, operatorDto);
  }
}
