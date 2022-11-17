import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/modelos/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {

  nombreProyecto: string = '';
  descProyecto: string = '';
  imgProyecto: string = '';
  enlaceProyecto: string = '';

  constructor(private proService: ProyectosService) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyecto = new Proyectos(this.nombreProyecto, this.descProyecto, this.imgProyecto, this.enlaceProyecto);
    this.proService.save(proyecto).subscribe(data=>{
      alert ("Añadido con éxito");
      window.location.reload();
    }, err => {
      alert("No se pudo añadir");
    })
  }

}
