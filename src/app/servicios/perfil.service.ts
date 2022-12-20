import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Perfil } from '../modelos/perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  
  
  //URL = 'http://localhost:8080/perfil/'
    URL = 'https://guido-back-guidoz86.koyeb.app/perfil/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Perfil[]>{
    return this.httpClient.get<Perfil[]>(this.URL + 'lista');
  }

  public detail(id: number):Observable<Perfil>{
    return this.httpClient.get<Perfil>(this.URL + `detail/${id}`);
  }

  public save(perfil: Perfil):Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', perfil);
  }

  public update(id: number, perfil: Perfil):Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, perfil);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
