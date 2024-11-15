import { Routes } from '@angular/router';
import { SupportTicketComponent } from './support-ticket/support-ticket.component';

export const routes: Routes = [
  {
    path: '',
    component: SupportTicketComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];
