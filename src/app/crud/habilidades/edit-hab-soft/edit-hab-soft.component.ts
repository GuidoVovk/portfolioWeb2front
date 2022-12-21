import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HabilidadesSoft } from 'src/app/modelos/habilidadesSoft';
import { HabilidadesSoftServiceService } from 'src/app/servicios/habilidades-soft-service.service';

@Component({
  selector: 'app-edit-hab-soft',
  templateUrl: './edit-hab-soft.component.html',
  styleUrls: ['./edit-hab-soft.component.css']
})
export class EditHabSoftComponent implements OnInit {

  habSoft!: HabilidadesSoft;

  constructor(private habSoftS: HabilidadesSoftServiceService, private router: Router, private activatedRouted: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRouted.snapshot.params['id'];
    this.habSoftS.detail(id).subscribe(
      data => {
        this.habSoft = data;
      }, err => {
        alert("Error al modificar educación");
        this.router.navigate([''])
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRouted.snapshot.params['id'];
    this.habSoftS.update(id, this.habSoft).subscribe(
      data => {
        this.router.navigate(['/habilidades']);
      }, err => {
        alert("error al modificar educacion")
        this.router.navigate(['inicio'])
      }
    )
  }

}
