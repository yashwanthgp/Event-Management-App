import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidation } from '../../services/validation';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../services/event-service.service';

@Component({
  selector: 'app-add-edit-event',
  templateUrl: './add-edit-event.component.html',
  styleUrl: './add-edit-event.component.scss'
})
export class AddEditEventComponent implements OnInit {

  createEventForm: FormGroup;

  public userId: any;
  public eventId: any;
  public data: any;
    
      constructor(private _fb: FormBuilder, 
        private router: Router,private route: ActivatedRoute,
        private eventService: EventService
      ) {
        this.createEventForm = this._fb.group({
          eventTitle: ['', Validators.required],
          eventDescription: ['',  Validators.required],
          eventDate: ['', Validators.required],
          eventLocation: ['', Validators.required],
          userId: ['', Validators.required]
        }
        );
      }
  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.eventId = this.route.snapshot.queryParamMap.get('eventId');
    this.eventService.getEventById(this.eventId).subscribe(eve => {
      this.data = eve;
    });
  }

      onFormSubmit() {
        if(this.createEventForm.valid) {
          if(this.data) {
            this.eventService.updateEvent(this.eventId,this.createEventForm.value).subscribe({
              next: (val: any) => {
                alert('Event updated successfully');
                this.createEventForm.reset;
                this.router.navigate(['/event-details', this.eventId]);
              },
              error: (err: any) => {
                alert('something went wrong');
              },
            });

          } else {
            this.eventService.addEvent(this.createEventForm.value).subscribe({
              next: (val: any) => {
                alert('Event created successfully');
                this.createEventForm.reset;
                this.router.navigate(['/event-list', this.userId]);
              },
              error: (err: any) => {
                alert('something went wrong');
              },
            });
          }
          
        }
      }

}
