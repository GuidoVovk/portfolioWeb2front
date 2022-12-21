import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/modelos/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styles: [
  ]
})
export class EditEducacionComponent implements OnInit {

  educacion!: Educacion;

  constructor(private educacionService: EducacionService, private router: Router, private activatedRouted: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRouted.snapshot.params['id'];
    this.educacionService.detail(id).subscribe(
      data => {
        this.educacion = data;
      }, err => {
        alert("Error al modificar educación");
        this.router.navigate(['/cv'])
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRouted.snapshot.params['id'];
    this.educacionService.update(id, this.educacion).subscribe(
      data => {
        this.router.navigate(['/cv']);
      }, err => {
        alert("error al modificar educacion")
        this.router.navigate(['inicio'])
      }
    )
  }

}
