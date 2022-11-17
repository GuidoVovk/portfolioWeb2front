import { Component, OnInit } from '@angular/core';
import { HabilidadesDesign } from 'src/app/modelos/habilidadesDesign';
import { HabilidadesDesignServiceService } from 'src/app/servicios/habilidades-design-service.service';

@Component({
  selector: 'app-new-hab-design',
  templateUrl: './new-hab-design.component.html',
  styleUrls: ['./new-hab-design.component.css']
})
export class NewHabDesignComponent implements OnInit {

  nombreHabDesign: string = '';
  porcentajeHabDesign: string = '';

  constructor(private habDesignService: HabilidadesDesignServiceService) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const hab = new HabilidadesDesign(this.nombreHabDesign, this.porcentajeHabDesign);
    this.habDesignService.save(hab).subscribe(data=>{
      alert ("Añadido con éxito");
      window.location.reload();
    }, err => {
      alert("No se pudo añadir");
    })
  }


}
