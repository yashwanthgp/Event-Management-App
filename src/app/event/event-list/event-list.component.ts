import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss'
})
export class EventListComponent implements OnInit{

constructor(private eventService:EventService,
  private route: ActivatedRoute, private router: Router
) {}

public eventList: any;

  ngOnInit(): void {
    this.getEventList();
    
  }

  getEventList() {
    this.eventService.getEvents().subscribe(events => {
      this.eventList = events.filter((e:any) => {
        return e.userId === this.route.snapshot.paramMap.get('userId');
      });
      console.log(this.route.snapshot.paramMap.get('userId'));
      console.log(this.eventList);
    });
  }

  createNewEvent() {
    this.router.navigate(['add-edit-event', this.route.snapshot.paramMap.get('userId')]);
  }


}
