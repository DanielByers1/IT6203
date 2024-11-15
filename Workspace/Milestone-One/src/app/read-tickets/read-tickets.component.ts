import { Component, OnInit } from '@angular/core';
import { TicketService, Ticket } from '../ticket.service';

@Component({
  selector: 'app-read-tickets',
  templateUrl: './read-tickets.component.html',
  styleUrls: ['./read-tickets.component.css']
})
export class ReadTicketsComponent implements OnInit {
  tickets: Ticket[] = [];

  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    this.ticketService.getTickets().subscribe(tickets => this.tickets = tickets);
  }
}


