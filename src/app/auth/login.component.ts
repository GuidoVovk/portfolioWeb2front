import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from '../modelos/login-usuario';
import { AuthService } from '../servicios/auth.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  errMsj!: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }


  onLogin():void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.tokenService.setToken(data.token);
        this.router.navigate(['/home']);
        window.location.reload()
      }, err =>{
        this.errMsj = err.error.message;
      }
    );
   }


}
