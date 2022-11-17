import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidades } from '../modelos/habilidades';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  URL = 'http://localhost:8080/skills/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Habilidades[]>{
    return this.httpClient.get<Habilidades[]>(this.URL + 'lista');
  }

  public detail(id: number):Observable<Habilidades>{
    return this.httpClient.get<Habilidades>(this.URL + `detail/${id}`);
  }

  public save(hab: Habilidades):Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', hab);
  }

  public update(id: number, hab: Habilidades):Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, hab);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
