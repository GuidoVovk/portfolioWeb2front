import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HabilidadesSoft } from '../modelos/habilidadesSoft';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesSoftServiceService {

  URL = 'http://localhost:8080/skillsSoft/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<HabilidadesSoft[]>{
    return this.httpClient.get<HabilidadesSoft[]>(this.URL + 'lista');
  }

  public detail(id: number):Observable<HabilidadesSoft>{
    return this.httpClient.get<HabilidadesSoft>(this.URL + `detail/${id}`);
  }

  public save(habS: HabilidadesSoft):Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', habS);
  }

  public update(id: number, habS: HabilidadesSoft):Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, habS);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
