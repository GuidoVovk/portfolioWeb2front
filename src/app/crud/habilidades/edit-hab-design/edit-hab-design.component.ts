import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HabilidadesDesign } from 'src/app/modelos/habilidadesDesign';
import { HabilidadesDesignServiceService } from 'src/app/servicios/habilidades-design-service.service';

@Component({
  selector: 'app-edit-hab-design',
  templateUrl: './edit-hab-design.component.html',
  styleUrls: ['./edit-hab-design.component.css']
})
export class EditHabDesignComponent implements OnInit {

  habDesign!: HabilidadesDesign;

  constructor(private habDesignS: HabilidadesDesignServiceService, private router: Router, private activatedRouted: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRouted.snapshot.params['id'];
    this.habDesignS.detail(id).subscribe(
      data => {
        this.habDesign = data;
      }, err => {
        alert("Error al modificar educación");
        this.router.navigate([''])
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRouted.snapshot.params['id'];
    this.habDesignS.update(id, this.habDesign).subscribe(
      data => {
        this.router.navigate(['habilidades']);
      }, err => {
        alert("error al modificar educacion")
        this.router.navigate([''])
      }
    )
  }

}
