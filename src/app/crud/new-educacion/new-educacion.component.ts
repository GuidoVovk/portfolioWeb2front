import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/modelos/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styles: [
  ]
})
export class NewEducacionComponent implements OnInit {

  nombreEdu: string = '';
  tituloEdu: string = '';
  fechaEdu: string = '';
  descripcionEdu: string = '';

  constructor(private educacionService: EducacionService) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const edu = new Educacion(this.nombreEdu, this.tituloEdu, this.fechaEdu, this.descripcionEdu);
    this.educacionService.save(edu).subscribe(data=>{
      alert ("Añadido con éxito");
      window.location.reload();
    }, err => {
      alert("No se pudo añadir");
    })
  }

}
