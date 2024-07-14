import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { routes } from '../app.routes';
import { Alimento } from '../servicios/Alimento';
import { AlimentoServicio } from '../servicios/AlimentoServicio.service';

@Component({
  selector: 'alimento',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './alimento.component.html',
  styleUrl: './alimento.component.css'
})
export class AlimentoComponent {
  alimentos : Alimento[];
  
  constructor(private alimentoServicio : AlimentoServicio, private router : Router){}

  ngOnInit(){
    this.obtenerAlimentos();
  }

  obtenerAlimentos(){
    this.alimentoServicio.obtenerAlimentos().subscribe(
      datos=>{
        this.alimentos = datos;
        console.log('ALIMENTOS OBTENIDOS');
      }
    )
  }

}
