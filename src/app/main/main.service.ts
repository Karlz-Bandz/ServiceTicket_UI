import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { CheckAtmDto } from '../dto/CheckAtmDto';
import { CheckOperatorDto } from '../dto/CheckOperatorDto';
import { MasterTicketDto } from '../dto/MasterTicketDto';
import { AtmDto } from '../dto/AtmDto';

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

  public export(masterTicketDto: MasterTicketDto): Observable<Blob>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'blob' as 'json'
    };

    return this.http.post(`${this.baseApi}/pdf/export`, masterTicketDto, httpOptions).pipe(
      map((response: any) => {
        return new Blob([response], {type: 'application/pdf'});
      })
    );
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

  public existsBySerialNo(serialNo: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseApi}/atm/exists/sn/` + serialNo);
  }

  public existsByOperatorName(operatorName: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseApi}/operator/exists/` + operatorName);
  }

  public findByAtmId(atmId: string | undefined | null): Observable<AtmDto> {
    return this.http.get<AtmDto>(`${this.baseApi}/atm/find/name/` + atmId);
  }

  public findBySerialNo(serialNo: string | undefined | null): Observable<AtmDto> {
    return this.http.get<AtmDto>(`${this.baseApi}/atm/find/serial/` + serialNo);
  }
}
