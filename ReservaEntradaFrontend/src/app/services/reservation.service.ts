// src/app/services/reservation.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = `${environment.apiUrl}/reservations`;

  constructor(private http: HttpClient) {}

  reserveSeat(eventId: number, seatNumber: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/reserve`, { eventId, seatNumber });
  }
}
