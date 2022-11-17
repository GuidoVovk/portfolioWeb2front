import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  

  constructor(private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    
  }

  alert(){
    alert('Podes acceder al portfolio ingresando usuario: user  contraseña: user');
    this.router.navigate(['/login']);
    
   }


}
