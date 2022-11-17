import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HabilidadesBack } from '../modelos/habilidadesBack';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesBackServiceService {

  URL = 'http://localhost:8080/skillsBack/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<HabilidadesBack[]>{
    return this.httpClient.get<HabilidadesBack[]>(this.URL + 'lista');
  }

  public detail(id: number):Observable<HabilidadesBack>{
    return this.httpClient.get<HabilidadesBack>(this.URL + `detail/${id}`);
  }

  public save(habB: HabilidadesBack):Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', habB);
  }

  public update(id: number, habB: HabilidadesBack):Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, habB);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
