import { Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { RegisterComponentComponent } from './components/register-component/register-component.component';
import { ReservationComponent } from './components/reservation-component/reservation-component.component';
import { EventListComponent } from './components/event-list-component/event-list-component.component';
import { EventDetailComponent } from './components/event-detail-component/event-detail-component.component';

export const routes: Routes = [
    {path:'',component:HomeComponentComponent},
    {path:'login',component:LoginComponentComponent},
    {path:'register',component:RegisterComponentComponent},
    {path:'events',component:EventDetailComponent},
    {path:'events/:id',component:EventListComponent},
    {path:'reservation',component:ReservationComponent}
];
