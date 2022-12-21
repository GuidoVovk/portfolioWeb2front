import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Perfil } from 'src/app/modelos/perfil';
import { PerfilService } from 'src/app/servicios/perfil.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  perfil!: Perfil;

  constructor(private perfilService: PerfilService, private router:Router, private activatedRouted: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRouted.snapshot.params['id'];
    this.perfilService.detail(id).subscribe(
      data => {
        this.perfil = data;
      }, err => {
        alert("Error al modificar perfil");
        this.router.navigate(['inicio'])
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRouted.snapshot.params['id'];
    this.perfilService.update(id, this.perfil).subscribe(
      data => {
        alert("Perfil actualizado");
        this.router.navigate(['inicio'])
      }, err => {
        alert("Error al modificar perfil");
        this.router.navigate(['inicio'])
        
      }
    )
  }

}