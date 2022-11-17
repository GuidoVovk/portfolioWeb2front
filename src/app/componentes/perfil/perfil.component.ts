import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/modelos/perfil';
import { PerfilService } from 'src/app/servicios/perfil.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfil: Perfil[] = [];
  isAdmin = false;

  showForm:boolean = false;
  isLogged = false;

  constructor(private perfilService: PerfilService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarPerfil();
    this.isAdmin = this.tokenService.isAdmin();
    this.isLogged = this.tokenService.isLogged();
  }


  cargarPerfil():void{
    this.perfilService.lista().subscribe(
      data =>{
        this.perfil = data;
      }, err => {
        
      }
    )
  }

  navigateTo(section: string) {
    window.location.hash = '';
    window.location.hash = section;
  }

}
