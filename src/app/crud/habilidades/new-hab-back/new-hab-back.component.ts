import { Component, OnInit } from '@angular/core';
import { HabilidadesBack } from 'src/app/modelos/habilidadesBack';
import { HabilidadesBackServiceService } from 'src/app/servicios/habilidades-back-service.service';

@Component({
  selector: 'app-new-hab-back',
  templateUrl: './new-hab-back.component.html',
  styleUrls: ['./new-hab-back.component.css']
})
export class NewHabBackComponent implements OnInit {

  nombreHabBack: string = '';
  porcentajeHabBack: string = '';

  constructor(private habServiceBack: HabilidadesBackServiceService) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const hab = new HabilidadesBack(this.nombreHabBack, this.porcentajeHabBack);
    this.habServiceBack.save(hab).subscribe(data=>{
      alert ("Añadido con éxito");
      window.location.reload();
    }, err => {
      alert("No se pudo añadir");
    })
  }

}
