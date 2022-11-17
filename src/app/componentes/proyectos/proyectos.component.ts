import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/modelos/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyectos[] = [];
  showFormAdd: boolean = false;
  showFormEditPro: boolean = false;
  isAdmin = false;
  

  constructor(private proService: ProyectosService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarProyectos();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarProyectos():void{
    this.proService.lista().subscribe(
      data =>{
        this.proyectos = data.reverse();
      }, err => {
        alert("No se pudo cargar");
      }
    )
  }

  onDelete(id?:number){
    if(id != undefined){
      this.proService.delete(id).subscribe(
        data => {
          alert("Proyecto eliminado");
          this.cargarProyectos();
        }, err => {
          alert("No se pudo borrar");
        }
      )
    }
  }

  show(){
    this.showFormAdd = !this.showFormAdd;
  }

  showEditPro(){
    this.showFormEditPro = !this.showFormEditPro;
  }

}
