import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from 'src/app/modelos/habilidades';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-edit-hab-front',
  templateUrl: './edit-hab-front.component.html',
  styleUrls: ['./edit-hab-front.component.css']
})
export class EditHabFrontComponent implements OnInit {

  hab!: Habilidades;

  constructor(private habService: HabilidadesService, private router: Router, private activatedRouted: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRouted.snapshot.params['id'];
    this.habService.detail(id).subscribe(
      data => {
        this.hab = data;
      }, err => {
        alert("Error al modificar educación");
        this.router.navigate([''])
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRouted.snapshot.params['id'];
    this.habService.update(id, this.hab).subscribe(
      data => {
        this.router.navigate(['habilidades']);
      }, err => {
        alert("error al modificar educacion")
        this.router.navigate([''])
      }
    )
  }

}
