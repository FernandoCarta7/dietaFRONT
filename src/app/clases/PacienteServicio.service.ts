import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Paciente } from "./Paciente";

@Injectable({
    providedIn:'root'
})
export class PacienteService{
    private urlBase = "http://localhost:8080/dieta-app/pacientes"

    constructor(private http : HttpClient){}

    obtenerPacientes(): Observable<Paciente[]>{
        return this.http.get<Paciente[]>(this.urlBase);
    }
}