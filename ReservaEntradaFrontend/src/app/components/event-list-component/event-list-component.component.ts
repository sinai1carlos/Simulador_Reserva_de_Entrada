// src/app/components/event-list-component/event-list-component.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list-component.component.html',
  styleUrls: ['./event-list-component.component.css']
})
export class EventListComponent implements OnInit {
  events: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.apiService.getEvents().subscribe(data => {
      this.events = data;
    }, error => {
      console.error('Error fetching events', error);
    });
  }
}
