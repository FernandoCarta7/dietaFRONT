import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router : Router){

  }
  ngOnInit(){}
  goToPaciente(){
    this.router.navigate(['paciente']);
  }
  goToAlimentos(){
    this.router.navigate(['alimento']);
  }
  goToReceta(){
    this.router.navigate(['receta']);
  }
  goToInicio(){
    this.router.navigate(['inicio']);
  }
}
