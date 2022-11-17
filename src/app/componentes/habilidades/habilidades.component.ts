import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/modelos/habilidades';
import { HabilidadesBack } from 'src/app/modelos/habilidadesBack';
import { HabilidadesDesign } from 'src/app/modelos/habilidadesDesign';
import { HabilidadesSoft } from 'src/app/modelos/habilidadesSoft';
import { HabilidadesBackServiceService } from 'src/app/servicios/habilidades-back-service.service';
import { HabilidadesDesignServiceService } from 'src/app/servicios/habilidades-design-service.service';
import { HabilidadesSoftServiceService } from 'src/app/servicios/habilidades-soft-service.service';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidades: Habilidades[] = [];
  habBack: HabilidadesBack[] = [];
  habDesign: HabilidadesDesign[] = [];
  habSoft: HabilidadesSoft[] = [];
  showFormFront: boolean = false;
  showFormBack: boolean = false;
  showFormDesign: boolean = false;
  showFormSoft: boolean = false;
  showFormEdit: boolean = false;
  showFormEditB: boolean = false;
  showFormEditD: boolean = false;
  showFormEditS: boolean = false;
  isAdmin = false;


  constructor(private tokenService: TokenService, private habService: HabilidadesService, private habBackS: HabilidadesBackServiceService, private habDesignS: HabilidadesDesignServiceService, private habSoftS: HabilidadesSoftServiceService) { }

  ngOnInit(): void {
    this.cargarHabilidades();
    this.cargarHabilidadesBack();
    this.cargarHabilidadesDesign();
    this.cargarHabilidadesSoft();
    this.isAdmin = this.tokenService.isAdmin();
  }

  cargarHabilidades():void{
    this.habService.lista().subscribe(
      data =>{
        this.habilidades = data.reverse();
      }, err => {
        alert("No se pudo cargar");
      }
    )
  }

  cargarHabilidadesBack():void{
    this.habBackS.lista().subscribe(
      data =>{
        this.habBack = data.reverse();
      }, err => {
        alert("No se pudo cargar");
      }
    )
  }

  cargarHabilidadesDesign():void{
    this.habDesignS.lista().subscribe(
      data =>{
        this.habDesign = data.reverse();
      }, err => {
        alert("No se pudo cargar");
      }
    )
  }

  cargarHabilidadesSoft():void{
    this.habSoftS.lista().subscribe(
      data =>{
        this.habSoft = data.reverse();
      }, err => {
        alert("No se pudo cargar");
      }
    )
  }

  showAddFront(){
    this.showFormFront = !this.showFormFront;
  }

  showAddBack(){
    this.showFormBack = !this.showFormBack;
  }

  showAddDesign(){
    this.showFormDesign = !this.showFormDesign;
  }

  showAddSoft(){
    this.showFormSoft = !this.showFormSoft;
  }

  showEdit(){
    this.showFormEdit = !this.showFormEdit;
  }

  showEditB(){
    this.showFormEditB = !this.showFormEditB;
  }

  showEditD(){
    this.showFormEditD = !this.showFormEditD;
  }

  showEditS(){
    this.showFormEditS = !this.showFormEditS;
  }

  onDelete(id?:number){
    if(id != undefined){
      this.habService.delete(id).subscribe(
        data => {
          alert("Habilidad eliminada");
          this.cargarHabilidades();
        }, err => {
          alert("No se pudo borrar");
        }
      )
    }
  }

  onDeleteB(id?:number){
    if(id != undefined){
      this.habBackS.delete(id).subscribe(
        data => {
          alert("Habilidad eliminada");
          this.cargarHabilidadesBack();
        }, err => {
          alert("No se pudo borrar");
        }
      )
    }
  }

  onDeleteD(id?:number){
    if(id != undefined){
      this.habDesignS.delete(id).subscribe(
        data => {
          alert("Habilidad eliminada");
          this.cargarHabilidadesDesign();
        }, err => {
          alert("No se pudo borrar");
        }
      )
    }
  }

  onDeleteS(id?:number){
    if(id != undefined){
      this.habSoftS.delete(id).subscribe(
        data => {
          alert("Habilidad eliminada");
          this.cargarHabilidadesSoft();
        }, err => {
          alert("No se pudo borrar");
        }
      )
    }
  }
  
}
