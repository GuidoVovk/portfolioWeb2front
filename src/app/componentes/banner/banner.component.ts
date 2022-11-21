import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  alert(){
    alert('Puedes acceder al portfolio ingresando usuario: user  contraseña: user');
    this.router.navigate(['/login']);
    
   }

}
