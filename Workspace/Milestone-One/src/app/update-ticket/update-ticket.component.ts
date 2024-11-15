import { Component, OnInit } from '@angular/core';
import { TicketService, Ticket } from '../ticket.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.css']
})
export class UpdateTicketComponent implements OnInit {
  ticket: Ticket | undefined;

  constructor(private ticketService: TicketService, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.ticketService.getTicket(id).subscribe(ticket => this.ticket = ticket);
  }

  onSubmit() {
    if (this.ticket) {
      this.ticketService.updateTicket(this.ticket);
    }
  }
}


