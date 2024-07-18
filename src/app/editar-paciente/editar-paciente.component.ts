import { Component } from '@angular/core';
import { Paciente } from '../servicios/Paciente';
import { PacienteService } from '../servicios/PacienteServicio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-paciente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-paciente.component.html',
  styleUrl: './editar-paciente.component.css'
})
export class EditarPacienteComponent {
  paciente: Paciente = new Paciente();
  id:number;

  constructor(private pacienteServicio : PacienteService,
    private ruta: ActivatedRoute,
    private enrutador: Router
  ){}


  ngOnInit(){
    this.id = this.ruta.snapshot.params['id'];
    this.pacienteServicio.obtenerPacientePorId(this.id).subscribe(
      {
        next: (datos) => this.paciente = datos,
        error:(errores:any) => console.warn(errores)
      }
    )
  }

  guardarPaciente(){

    this.paciente.correo = this.paciente.correo.toUpperCase();
    this.paciente.enfermedades = this.paciente.enfermedades.toUpperCase();
    this.paciente.genero = this.paciente.genero.toUpperCase();
    this.paciente.nivel_actividad = this.paciente.nivel_actividad.toUpperCase();
    this.paciente.primer_apellido = this.paciente.primer_apellido.toUpperCase();
    this.paciente.primer_nombre = this.paciente.primer_nombre.toUpperCase();
    this.paciente.segundo_apellido = this.paciente.segundo_apellido.toUpperCase();
    this.paciente.segundo_nombre = this.paciente.segundo_nombre.toUpperCase();
    this.pacienteServicio.editarPaciente(this.id, this.paciente).subscribe(
      {
        next:(datos) => this.irPacientes(),
        error:(errores) => alert('Error al editar')
      }
    );
  }
  irInicio(){
    this.enrutador.navigate(['/inicio']);
  }
  onSubmit(){
    this.guardarPaciente();
  }
  irPacientes(){
    this.enrutador.navigate(['/paciente']);
  }
  /*validarCorreo(){
    const regexCorreo = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/;

    return this.paciente.correo.match(regexCorreo);
  }
  validarCadena(cadena:string) : boolean{
    const regexCadena = /[a-zA-ZáéíóúÁÉÍÓÚ]/;
    if(cadena !== undefined){
      let bandera = cadena.match(regexCadena);
      console.log(bandera);
      return true;
    }else {
      return false;
    }
  }
  validarCelular(){
    const regexCelular = /[0-9]/;
    if(this.paciente.celular.length === 10){
      return this.paciente.celular.match(regexCelular)

    } else {
      return false;
    }
  }*/
}
