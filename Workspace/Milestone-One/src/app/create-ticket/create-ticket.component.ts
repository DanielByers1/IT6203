import { Component } from '@angular/core';
import { TicketService, Ticket } from '../ticket.service';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent {
  ticket: Ticket = { id: 0, title: '', description: '' };

  constructor(private ticketService: TicketService) {}

  onSubmit() {
    this.ticketService.addTicket(this.ticket);
    this.ticket = { id: 0, title: '', description: '' };  // Reset form
  }
}
