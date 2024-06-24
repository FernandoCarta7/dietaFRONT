import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PacienteComponent } from './paciente/paciente.component';
import { AlimentoComponent } from './alimento/alimento.component';
import { RecetaComponent } from './receta/receta.component';
import { InicioComponent } from './inicio/inicio.component';
import { title } from 'process';
import { RegistrarPacienteComponent } from './registrar-paciente/registrar-paciente.component';

export const routes: Routes = [
    { path: 'paciente', component: PacienteComponent, title: 'Pacientes' },
    { path: 'alimento', component: AlimentoComponent, title: 'Alimentos' },
    { path: 'receta', component: RecetaComponent, title: 'Recetas' },
    { path: 'inicio', component: InicioComponent, title: 'Inicio' },
    { path: 'registrar-paciente', component: RegistrarPacienteComponent, title: 'Registro Paciente' }, 
    { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];
