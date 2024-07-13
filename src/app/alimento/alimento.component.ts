import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { routes } from '../app.routes';

@Component({
  selector: 'alimento',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './alimento.component.html',
  styleUrl: './alimento.component.css'
})
export class AlimentoComponent {
  selectedFile : File | null = null;

  constructor(private http : HttpClient, private route : Router){}

  onFileSelected ( event : any ) : void {
    this.selectedFile = event.target.files[0];
  }
  onUpload(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      this.http.post('http://localhost:8080/dieta-app/alimentos/upload', formData).subscribe(response => {
        console.log('Upload success', response);
        this.route.navigate(['/inicio']);

      }, error => {
        console.log('Upload error', error);
      });
    }
  }

}
