import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtDto } from '../modelos/jwt-dto';
import { LoginUsuario } from '../modelos/login-usuario';
import { NuevoUsuario } from '../modelos/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'https://guido-back-guidoz86.koyeb.app/auth/';
  //authURL = 'http://localhost:8080/auth/';
  

  constructor(private httpClient: HttpClient) { }


  public nuevo(nuevoUsurio: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsurio);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario);
  }
}
