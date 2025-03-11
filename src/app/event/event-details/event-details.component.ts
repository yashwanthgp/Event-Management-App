import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../services/event-service.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.scss'
})
export class EventDetailsComponent implements OnInit {


  constructor(private eventService:EventService,
    private route: ActivatedRoute, private router: Router
  ) {}

  public event: any;
  
  ngOnInit(): void {
    this.getEvent();
  }

  getEvent() {
    this.eventService.getEventById(this.route.snapshot.paramMap.get('eventId')).subscribe(eve => {
      this.event = eve;
      console.log(this.route.snapshot.paramMap.get('eventId'));
      console.log(this.event);
    });
      
    
  }

  editEvent() {
    this.router.navigate(['add-edit-event', this.event.userId], {queryParams: {eventId: this.route.snapshot.paramMap.get('eventId')}})
  }

  deleteEvent() {
    this.eventService.deleteEventById(this.route.snapshot.paramMap.get('eventId')).subscribe({
      next: (val: any) => {
        alert('Event Deleted Successfully');
        this.router.navigate(['/event-list', this.event.userId]);
      },
      error: (err: any) => {
        alert('something went wrong');
      }
    });    
  }
}
