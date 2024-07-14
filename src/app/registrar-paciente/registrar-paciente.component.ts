import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PacienteService } from '../servicios/PacienteServicio.service';
import { Paciente } from '../servicios/Paciente';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'registrar-paciente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registrar-paciente.component.html',
  styleUrl: './registrar-paciente.component.css'
})
export class RegistrarPacienteComponent {

  paciente: Paciente;

  constructor(private pacienteServicio: PacienteService, private enrutador: Router) { }

  guardarPacienteClick() {
    this.guardarPaciente();
  }

  ngOnInit() {
    this.paciente = new Paciente();
    this.paciente.altura = null;
    this.paciente.celular = null;
    this.paciente.correo = null;
    this.paciente.enfermedades = "";
    this.paciente.fecha_nacimiento = null;
    this.paciente.genero = null;
    this.paciente.nivel_actividad = "";
    this.paciente.peso = null;
    this.paciente.primer_apellido = null;
    this.paciente.primer_nombre = null;
    this.paciente.segundo_apellido = "";
    this.paciente.segundo_nombre = "";
  }

  guardarPaciente() {

    this.pacienteServicio.agregarPaciente(this.paciente).subscribe(
      {
        next: (datos) => {
          this.enrutador.navigate(['/paciente']);
        },
        error: (error: any) => { console.log('Error al guardar el paciente') }
      }
    )
  }

  irPaciente() {
    this.enrutador.navigate(['/paciente']);
  }
}
