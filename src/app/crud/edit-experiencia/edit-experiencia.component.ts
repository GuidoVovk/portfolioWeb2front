import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/modelos/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styles: [
  ]
})
export class EditExperienciaComponent implements OnInit {

  experiencia!: Experiencia;

  constructor(private experienciaService: ExperienciaService, private router:Router, private activatedRouted: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRouted.snapshot.params['id'];
    this.experienciaService.detail(id).subscribe(
      data => {
        this.experiencia = data;
      }, err => {
        alert("Error al modificar experiencia");
        this.router.navigate(['/cv'])
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRouted.snapshot.params['id'];
    this.experienciaService.update(id, this.experiencia).subscribe(
      data => {
        this.router.navigate(['/cv']);
      }, err => {
        alert("error al modificar experiencia")
        this.router.navigate([''])
      }
    )
  }

}
