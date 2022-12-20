import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { CvComponent } from './componentes/cv/cv.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { HomeComponent } from './componentes/home/home.component';
import { IndexComponent } from './componentes/index/index.component';
import { MatComponent } from './componentes/mat/mat.component';
import { EditPoryectComponent } from './crud/edit-poryect/edit-poryect.component';
import { EditarPerfilComponent } from './crud/editar-perfil/editar-perfil.component';
import { GuardService as guard } from './guards/guard.service';
import { LoginGuard } from './guards/login.guard';



const routes: Routes = [
  { path: 'index', component: IndexComponent},
  { path: '', redirectTo: 'index', pathMatch:'full'},
  { path: 'editPerfil/:id', component: EditarPerfilComponent, canActivate: [guard], data: {expectedRol: ['admin']}},
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent, canActivate: [LoginGuard]},
  { path: 'work/:id', component: HomeComponent },
  { path: 'cv/:id', component: CvComponent },
  { path: 'editProyect/:id', component: EditPoryectComponent },
  { path: 'editHabilidades/:id', component: HabilidadesComponent },
  { path: 'editHabB/:id', component: HabilidadesComponent },
  { path: 'editHabD/:id', component: HabilidadesComponent },
  { path: 'editHabS/:id', component: HabilidadesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'inicio', component: MatComponent}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
