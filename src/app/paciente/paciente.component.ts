import { Component } from '@angular/core';
import { Paciente } from '../servicios/Paciente';
import { PacienteService } from '../servicios/PacienteServicio.service';
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
  /*getEdad(fecha_nacimiento: Date) {
    edad: Number;
    const hoy = new Date();
    const nacimiento = new Date(fecha_nacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
    return edad;
  }*/
}

