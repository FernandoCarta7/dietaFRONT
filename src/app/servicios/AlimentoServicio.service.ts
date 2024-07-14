import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Alimento } from "./Alimento";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class AlimentoServicio {
    private urlBase = "http://localhost:8080/dieta-app/alimentos";
    private urlBaseAgregar = 'http://localhost:8080/dieta-app/alimentos/agregar';
    constructor(private http: HttpClient) { }

    obtenerAlimentos(): Observable<Alimento[]> {
        return this.http.get<Alimento[]>(this.urlBase);
    }

    editarAlimento(id: number, alimento: Alimento): Observable<Object> {
        return this.http.put(`${this.urlBase}/${id}`, alimento);
    }

    agregarAlimento(alimento: Alimento): Observable<Object> {
        return this.http.post(this.urlBaseAgregar, alimento);
    }
    obtenerAlimentoId(id: number) {
        return this.http.get<Alimento>(`${this.urlBase}/${id}`)
    }

    eliminarAlimento(id: number): Observable<Object> {
        return this.http.delete(`${this.urlBase}/${id}`);
    }
}