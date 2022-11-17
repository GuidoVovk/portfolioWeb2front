import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/modelos/habilidades';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-new-habilidades',
  templateUrl: './new-habilidades.component.html',
  styles: [
  ]
})
export class NewHabilidadesComponent implements OnInit {

  nombreHab: string = '';
  porcentajeHab: string = '';

  constructor(private habilidadesService: HabilidadesService) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const hab = new Habilidades(this.nombreHab, this.porcentajeHab);
    this.habilidadesService.save(hab).subscribe(data=>{
      alert ("Añadido con éxito");
      window.location.reload();
    }, err => {
      alert("No se pudo añadir");
    })
  }

}
