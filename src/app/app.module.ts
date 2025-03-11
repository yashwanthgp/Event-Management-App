import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './authentication/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RegistrationComponent } from './authentication/registration/registration.component';
import {MatButtonModule} from '@angular/material/button';
import { UserService } from './services/user-service.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { AuthenticationModule } from './authentication/authentication.module';
import { EventModule } from './event/event.module';
import { EventService } from './services/event-service.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { EventListComponent } from './event/event-list/event-list.component';
import { EventDetailsComponent } from './event/event-details/event-details.component';
import { AddEditEventComponent } from './event/add-edit-event/add-edit-event.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { NavBarComponent } from './event/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    EventListComponent,
    EventDetailsComponent,
    AddEditEventComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    MatCardModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    AuthenticationModule,
    EventModule,
    MatToolbarModule,
    MatIconModule,
    MatDatepickerModule
  ],
  providers: [AppRoutingModule, UserService, provideHttpClient(),EventService,provideNativeDateAdapter()],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
