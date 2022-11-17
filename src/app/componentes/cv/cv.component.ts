import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/modelos/educacion';
import { Experiencia } from 'src/app/modelos/experiencia';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  experiencia: Experiencia[] = [];
  educacion: Educacion[] = [];
  showForm:boolean = false;
  showFormAdd:boolean = false;
  showFormAddEdu:boolean = false;
  showFormEditEdu:boolean = false;
  isAdmin = false;


  constructor(private experienciaService: ExperienciaService, private educacionService: EducacionService, private tokenService:TokenService) { }

  ngOnInit(): void {
    this.cargarEducacion();
    this.cargarExperiencia();
    this.isAdmin = this.tokenService.isAdmin();
  }

  show(){
    this.showForm = !this.showForm;
  }

  showEditEdu(){
    this.showFormEditEdu = !this.showFormEditEdu;
  }

  showAdd(){
    this.showFormAdd = !this.showFormAdd;
  }

  showAddEdu(){
    this.showFormAddEdu = !this.showFormAddEdu;
  }

  cargarExperiencia():void{
    this.experienciaService.lista().subscribe(
      data =>{
        this.experiencia = data.reverse();
      }, err => {
        alert("No se pudo cargar");
      }
    )
  }

  cargarEducacion():void{
    this.educacionService.lista().subscribe(
      data =>{
        this.educacion = data.reverse();
      }, err => {
        alert("No se pudo cargar");
      }
    )
  }

  onDelete(id?:number){
    if(id != undefined){
      this.experienciaService.delete(id).subscribe(
        data => {
          alert("Experiencia eliminada");
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar");
        }
      )
    }
  }

  onDeleteEdu(id?:number){
    if(id != undefined){
      this.educacionService.delete(id).subscribe(
        data => {
          alert("Educación eliminada");
          this.cargarEducacion();
        }, err => {
          alert("No se pudo borrar");
        }
      )
    }
  }

}
