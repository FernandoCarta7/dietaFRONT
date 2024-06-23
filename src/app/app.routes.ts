import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PacienteComponent } from './paciente/paciente.component';
import { AlimentoComponent } from './alimento/alimento.component';
import { RecetaComponent } from './receta/receta.component';

export const routes: Routes = [
    { path: 'paciente', component: PacienteComponent, title: 'Pacientes' },
    { path: 'alimento', component: AlimentoComponent, title: 'Alimentos' },
    { path: 'receta', component: RecetaComponent, title: 'Recetas' },
    { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];
