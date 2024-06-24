import { Component } from '@angular/core';
import { Paciente } from '../clases/Paciente';
import { PacienteService } from '../clases/PacienteServicio.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'paciente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paciente.component.html',
  styleUrl: './paciente.component.css'
})
export class PacienteComponent {
  pacientes:Paciente[];

  constructor(private pacienteServicio: PacienteService, private enrutador:Router){}

  ngOnInit(){
    this.obtenerPacientes();
  }
  obtenerPacientes(){
    this.pacienteServicio.obtenerPacientes().subscribe((
      datos => {
        this.pacientes = datos;
      }
    ))
  }

}

