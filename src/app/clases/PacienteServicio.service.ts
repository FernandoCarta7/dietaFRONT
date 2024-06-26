import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Paciente } from "./Paciente";

@Injectable({
    providedIn:'root'
})
export class PacienteService{
    private urlBase = "http://localhost:8080/dieta-app/pacientes";
    private urlBaseEditar = "http://localhost:8080/dieta-app/paciente";
    constructor(private http : HttpClient){}

    obtenerPacientes(): Observable<Paciente[]>{
        return this.http.get<Paciente[]>(this.urlBase);
    }

    editarPaciente(id:number, paciente: Paciente): Observable<Object>{
        return this.http.put(`${this.urlBase}/${id}`,paciente);
    }
    agregarPaciente(paciente:Paciente):Observable<Object>  {
        return this.http.post(this.urlBase, paciente);
    }

    obtenerPacientePorId(id:number){
        return this.http.get<Paciente>(`${this.urlBaseEditar}/${id}`);
    }
}