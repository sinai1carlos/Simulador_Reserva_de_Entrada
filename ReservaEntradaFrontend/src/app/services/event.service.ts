import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = `${environment.apiUrl}/events`; // URL base para eventos

  constructor(private http: HttpClient) {}

  // Método para obtener una lista de eventos
  getEvents(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Método para obtener detalles de un evento específico por ID
  getEventById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Método para crear un nuevo evento
  createEvent(event: any): Observable<any> {
    return this.http.post(this.apiUrl, event);
  }

  // Método para actualizar un evento existente
  updateEvent(id: number, event: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, event);
  }

  // Método para eliminar un evento
  deleteEvent(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
