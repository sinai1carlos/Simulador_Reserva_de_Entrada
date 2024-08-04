import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../services/event.service';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation-component.component.html',
  styleUrls: ['./reservation-component.component.css']
})
export class ReservationComponent implements OnInit {
  eventId!: number;
  event: any;
  selectedSeat: string | null = null;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private reservationService: ReservationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.eventId = +this.route.snapshot.paramMap.get('id')!;
    this.loadEvent();
  }

  loadEvent(): void {
    this.eventService.getEventById(this.eventId).subscribe(
      data => {
        this.event = data;
        this.isLoading = false;
      },
      error => {
        console.error('Error fetching event details', error);
        this.isLoading = false;
      }
    );
  }

  selectSeat(seatNumber: string): void {
    this.selectedSeat = seatNumber;
  }

  reserve(): void {
    if (this.selectedSeat) {
      this.reservationService.reserveSeat(this.eventId, this.selectedSeat).subscribe(
        response => {
          console.log('Reservation successful', response);
          this.router.navigate(['/confirmation']);
        },
        error => console.error('Error making reservation', error)
      );
    } else {
      console.error('No seat selected');
    }
  }
}
