import { Component } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-delete-ticket',
  templateUrl: './delete-ticket.component.html',
  styleUrls: ['./delete-ticket.component.css']
})
export class DeleteTicketComponent {
  ticketId: number = 0;

  constructor(private ticketService: TicketService) {}

  deleteTicket() {
    this.ticketService.deleteTicket(this.ticketId);
    this.ticketId = 0;  // Reset input
  }
}

