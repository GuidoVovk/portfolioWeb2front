import { Component, OnInit } from '@angular/core';
import { HabilidadesSoft } from 'src/app/modelos/habilidadesSoft';
import { HabilidadesSoftServiceService } from 'src/app/servicios/habilidades-soft-service.service';

@Component({
  selector: 'app-new-hab-soft',
  templateUrl: './new-hab-soft.component.html',
  styleUrls: ['./new-hab-soft.component.css']
})
export class NewHabSoftComponent implements OnInit {

  nombreHabSoft: string = '';
  porcentajeHabSoft: string = '';

  constructor(private habSoftService: HabilidadesSoftServiceService) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const hab = new HabilidadesSoft(this.nombreHabSoft, this.porcentajeHabSoft);
    this.habSoftService.save(hab).subscribe(data=>{
      alert ("Añadido con éxito");
      window.location.reload();
    }, err => {
      alert("No se pudo añadir");
    })
  }

}
