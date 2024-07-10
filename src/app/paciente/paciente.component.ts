import { Component } from '@angular/core';
import { Paciente } from '../clases/Paciente';
import { PacienteService } from '../clases/PacienteServicio.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegistrarPacienteComponent } from '../registrar-paciente/registrar-paciente.component';

@Component({
  selector: 'paciente',
  standalone: true,
  imports: [CommonModule, RegistrarPacienteComponent],
  templateUrl: './paciente.component.html',
  styleUrl: './paciente.component.css'
})
export class PacienteComponent {
  pacientes: Paciente[];

  constructor(private pacienteServicio: PacienteService, private enrutador: Router) { }

  ngOnInit() {
    this.obtenerPacientes();
  }
  obtenerPacientes() {
    this.pacienteServicio.obtenerPacientes().subscribe((
      datos => {
        this.pacientes = datos;
      }
    ))
  }


  editarPaciente(id: number) {
    this.enrutador.navigate(['editar-paciente', id]);
  }
  irRegistrarPaciente() {
    this.enrutador.navigate(['registrar-paciente'])
  }

  eliminarPaciente(id: number) {
    this.pacienteServicio.eliminarPaciente(id).subscribe({
      next: (datos) => this.obtenerPacientes(),
      error: (error) => console.error(error)
    })
  }
}

