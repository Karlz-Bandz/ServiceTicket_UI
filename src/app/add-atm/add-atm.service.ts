import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AtmDto } from '../dto/AtmDto';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AddAtmService {

  constructor(private http: HttpClient) { }

  private baseApi = environment.apiBaseUrl;

  public addAtm(atmDto: AtmDto): Observable<AtmDto>{
    return this.http.post<AtmDto>(`${this.baseApi}/atm/add`, atmDto);
  }
}
