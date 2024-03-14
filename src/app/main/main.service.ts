import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CheckAtmDto } from '../dto/CheckAtmDto';
import { CheckOperatorDto } from '../dto/CheckOperatorDto';
import { MasterTicketDto } from '../dto/MasterTicketDto';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  private baseApi = environment.apiBaseUrl;

  public getAtmList(): Observable<CheckAtmDto[]>{
    return this.http.get<CheckAtmDto[]>(`${this.baseApi}/atm/checklist`);
  }

  public getOperatorList(): Observable<CheckOperatorDto[]>{
    return this.http.get<CheckOperatorDto[]>(`${this.baseApi}/operator/checklist`);
  }

  public export(masterTicketDto: MasterTicketDto): Observable<MasterTicketDto>{
    return this.http.post<MasterTicketDto>(`${this.baseApi}/pdf/export`, masterTicketDto);
  }

  public deleteOperatorById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseApi}/operator/delete/` + id);
  }

  public deleteAtmById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseApi}/atm/delete/` + id);
  }

  public existsByAtmId(atmId: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseApi}/atm/exists/` + atmId);
  }
}
