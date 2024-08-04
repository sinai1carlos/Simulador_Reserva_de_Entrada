// src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Método para obtener una lista de eventos
  getEvents(): Observable<any> {
    return this.http.get(`${this.apiUrl}/events`);
  }

  // Método para obtener detalles de un evento específico
  getEventById(eventId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/events/${eventId}`);
  }

  // Método para crear una nueva reserva
  createReservation(reservation: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/reservations`, reservation);
  }

  // Método para obtener reservas de un usuario
  getUserReservations(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${userId}/reservations`);
  }

  // Método para cancelar una reserva
  cancelReservation(reservationId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/reservations/${reservationId}`);
  }
}
