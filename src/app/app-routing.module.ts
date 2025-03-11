import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { LoginComponent } from './authentication/login/login.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { authGuard } from './guards/auth.guard';
import { EventDetailsComponent } from './event/event-details/event-details.component';
import { AddEditEventComponent } from './event/add-edit-event/add-edit-event.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "login",
    pathMatch: 'full'
},
{
    path: "register",
    component: RegistrationComponent
},
{
    path: "login",
    component: LoginComponent
},
{
  path: "event-list/:userId",
  component: EventListComponent,
  canActivate: [authGuard]
},
{
  path: "event-details/:eventId",
  component: EventDetailsComponent,
  canActivate: [authGuard]
},
{
  path: "add-edit-event/:userId",
  component: AddEditEventComponent,
  canActivate: [authGuard]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
