import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Ticket {
  id: number;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private tickets: Ticket[] = [
    { id: 1, title: 'First Ticket', description: 'This is the first ticket.' },
    { id: 2, title: 'Second Ticket', description: 'This is the second ticket.' }
  ];

  getTickets(): Observable<Ticket[]> {
    return of(this.tickets);
  }

  getTicket(id: number): Observable<Ticket | undefined> {
    return of(this.tickets.find(ticket => ticket.id === id));
  }

  addTicket(ticket: Ticket): void {
    ticket.id = this.tickets.length + 1;
    this.tickets.push(ticket);
  }

  updateTicket(updatedTicket: Ticket): void {
    const index = this.tickets.findIndex(ticket => ticket.id === updatedTicket.id);
    if (index !== -1) {
      this.tickets[index] = updatedTicket;
    }
  }

  deleteTicket(id: number): void {
    this.tickets = this.tickets.filter(ticket => ticket.id !== id);
  }
}

