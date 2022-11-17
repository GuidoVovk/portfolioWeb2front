import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HabilidadesBack } from 'src/app/modelos/habilidadesBack';
import { HabilidadesBackServiceService } from 'src/app/servicios/habilidades-back-service.service';

@Component({
  selector: 'app-edit-hab-back',
  templateUrl: './edit-hab-back.component.html',
  styleUrls: ['./edit-hab-back.component.css']
})
export class EditHabBackComponent implements OnInit {

  habBack!: HabilidadesBack;

  constructor(private habBackS: HabilidadesBackServiceService, private router: Router, private activatedRouted: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRouted.snapshot.params['id'];
    this.habBackS.detail(id).subscribe(
      data => {
        this.habBack = data;
      }, err => {
        alert("Error al modificar educación");
        this.router.navigate([''])
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRouted.snapshot.params['id'];
    this.habBackS.update(id, this.habBack).subscribe(
      data => {
        this.router.navigate(['habilidades']);
      }, err => {
        alert("error al modificar educacion")
        this.router.navigate([''])
      }
    )
  }

}
