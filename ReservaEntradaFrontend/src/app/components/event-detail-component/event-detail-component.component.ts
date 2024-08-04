import { Component } from '@angular/core';
import { EventService } from '../../services/event.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail-component.component.html',
  styleUrls: ['./event-detail-component.component.css']
})
export class EventDetailComponent {
  event: any;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.eventService.getEventById(id).subscribe(
      data => this.event = data,
      error => console.error('Error fetching event details', error)
    );
  }

  reserve(): void {
    this.router.navigate(['/reserve', this.event.id]);
  }
}
