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
    private urlRegistrar = "http://localhost:8080/dieta-app/pacientes/registrar";
    constructor(private http : HttpClient){}

    obtenerPacientes(): Observable<Paciente[]>{
        return this.http.get<Paciente[]>(this.urlBase);
    }

    editarPaciente(id:number, paciente: Paciente): Observable<Object>{
        return this.http.put(`${this.urlBase}/${id}`,paciente);
    }
    agregarPaciente(paciente:Paciente):Observable<Object>  {
        return this.    http.post(this.urlRegistrar, paciente);
    }

    obtenerPacientePorId(id:number){
        return this.http.get<Paciente>(`${this.urlBaseEditar}/${id}`);
    }

    eliminarPaciente( id : number ) : Observable<Object>{
        return this.http.delete(`${this.urlBase}/${id}`);
    }

}