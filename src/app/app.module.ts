import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { CvComponent } from './componentes/cv/cv.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { IndexComponent } from './componentes/index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { interceptorProvider } from './interceptors/interceptor.service';
import { NewEducacionComponent } from './crud/new-educacion/new-educacion.component';
import { NewExperienciaComponent } from './crud/new-experiencia/new-experiencia.component';
import { NewHabilidadesComponent } from './crud/new-habilidades/new-habilidades.component';
import { EditEducacionComponent } from './crud/edit-educacion/edit-educacion.component';
import { EditExperienciaComponent } from './crud/edit-experiencia/edit-experiencia.component';
import { EditPoryectComponent } from './crud/edit-poryect/edit-poryect.component';
import { EditarPerfilComponent } from './crud/editar-perfil/editar-perfil.component';
import { NuevoProyectoComponent } from './crud/nuevo-proyecto/nuevo-proyecto.component';
import { NewHabBackComponent } from './crud/habilidades/new-hab-back/new-hab-back.component';
import { NewHabDesignComponent } from './crud/habilidades/new-hab-design/new-hab-design.component';
import { NewHabSoftComponent } from './crud/habilidades/new-hab-soft/new-hab-soft.component';
import { EditHabBackComponent } from './crud/habilidades/edit-hab-back/edit-hab-back.component';
import { EditHabDesignComponent } from './crud/habilidades/edit-hab-design/edit-hab-design.component';
import { EditHabSoftComponent } from './crud/habilidades/edit-hab-soft/edit-hab-soft.component';
import { EditHabFrontComponent } from './crud/edit-hab-front/edit-hab-front.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { HomeComponent } from './componentes/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PerfilComponent,
    ProyectosComponent,
    HabilidadesComponent,
    CvComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    IndexComponent,
    NewEducacionComponent,
    NewExperienciaComponent,
    NewHabilidadesComponent,
    EditEducacionComponent,
    EditExperienciaComponent,
    EditPoryectComponent,
    EditarPerfilComponent,
    NuevoProyectoComponent,
    NewHabBackComponent,
    NewHabDesignComponent,
    NewHabSoftComponent,
    EditHabBackComponent,
    EditHabDesignComponent,
    EditHabSoftComponent,
    EditHabFrontComponent,
    BannerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
