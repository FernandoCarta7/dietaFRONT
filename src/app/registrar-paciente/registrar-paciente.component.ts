import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'registrar-paciente',
  standalone: true,
  imports: [],
  templateUrl: './registrar-paciente.component.html',
  styleUrl: './registrar-paciente.component.css'
})
export class RegistrarPacienteComponent {

  constructor(private enrutador: Router){}


  irPaciente(){
    this.enrutador.navigate(['paciente']);
  }
}
