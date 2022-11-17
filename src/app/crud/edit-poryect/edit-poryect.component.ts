import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/modelos/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-edit-poryect',
  templateUrl: './edit-poryect.component.html',
  styleUrls: ['./edit-poryect.component.css']
})
export class EditPoryectComponent implements OnInit {

  proyectos!: Proyectos;

  constructor(private proService: ProyectosService, private router:Router, private activatedRouted: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRouted.snapshot.params['id'];
    this.proService.detail(id).subscribe(
      data => {
        this.proyectos = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['/work'])
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRouted.snapshot.params['id'];
    this.proService.update(id, this.proyectos).subscribe(
      data => {
        alert("Actualizado")
        this.router.navigate(['/work']);
      }, err => {
        alert("error al modificar proyecto")
        this.router.navigate([''])
      }
    )
  }

}
