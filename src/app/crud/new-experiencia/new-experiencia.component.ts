import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/modelos/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styles: [
  ]
})
export class NewExperienciaComponent implements OnInit {

  nombreExp: string = '';
  nombreEmpresa: string = '';
  fechaExp: string = '';
  descripcionExp: string = '';

  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const exp = new Experiencia(this.nombreExp, this.nombreEmpresa, this.fechaExp, this.descripcionExp);
    this.experienciaService.save(exp).subscribe(data=>{
      alert ("Añadido con éxito");
      window.location.reload();
    }, err => {
      alert("No se pudo añadir");
    })
  }

}
