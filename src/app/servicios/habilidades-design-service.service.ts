import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HabilidadesDesign } from '../modelos/habilidadesDesign';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesDesignServiceService {

  URL = 'http://localhost:8080/skillsDesign/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<HabilidadesDesign[]>{
    return this.httpClient.get<HabilidadesDesign[]>(this.URL + 'lista');
  }

  public detail(id: number):Observable<HabilidadesDesign>{
    return this.httpClient.get<HabilidadesDesign>(this.URL + `detail/${id}`);
  }

  public save(habD: HabilidadesDesign):Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', habD);
  }

  public update(id: number, habD: HabilidadesDesign):Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, habD);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
