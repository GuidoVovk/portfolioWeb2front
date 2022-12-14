import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogged = false;

  constructor(private tokenService: TokenService, private router:Router) { }

  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged();
  }

  onLogOut():void{
    this.tokenService.logOut();
    this.router.navigate(['/index']);
  }

}
