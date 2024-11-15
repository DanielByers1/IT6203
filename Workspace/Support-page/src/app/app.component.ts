import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SupportTicketComponent } from './support-ticket/support-ticket.component';
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule, 
    SupportTicketComponent,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Support Page';
}
