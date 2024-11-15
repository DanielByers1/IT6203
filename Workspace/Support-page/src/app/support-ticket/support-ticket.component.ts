import { Component, OnInit } from '@angular/core';
import { TicketService } from '../services/ticket.service';
import { Ticket } from '../models/ticket.model';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-support-ticket',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './support-ticket.component.html',
  styleUrls: ['./support-ticket.component.css'],
})
export class SupportTicketComponent implements OnInit {
  tickets: Ticket[] = [];
  ticketForm: FormGroup;
  editingTicket: Ticket | null = null;

  constructor(
    private ticketService: TicketService,
    private fb: FormBuilder
  ) {
    this.ticketForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      issue: ['', Validators.required],
      date: [new Date().toISOString()]
    });
  }

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets() {
    this.ticketService.getTickets().subscribe(
      (tickets: Ticket[]) => {
        this.tickets = tickets;
      },
      (error) => {
        console.error('Error loading tickets:', error);
      }
    );
  }

  submitTicket() {
    if (this.ticketForm.valid) {
      const ticket = this.ticketForm.value;

      if (this.editingTicket) {
        this.ticketService.updateTicket(this.editingTicket._id!, ticket).subscribe(
          () => {
            this.loadTickets();
            this.resetForm();
          },
          (error) => {
            console.error('Error updating ticket:', error);
          }
        );
      } else {
        this.ticketService.addTicket(ticket).subscribe(
          () => {
            this.loadTickets();
            this.resetForm();
          },
          (error) => {
            console.error('Error adding ticket:', error);
          }
        );
      }
    } else {
      alert('Please fill in all fields correctly.');
    }
  }

  deleteTicket(ticketId: string) {
    this.ticketService.deleteTicket(ticketId).subscribe(
      () => {
        this.loadTickets();
      },
      (error) => {
        console.error('Error deleting ticket:', error);
      }
    );
  }

  editTicket(ticket: Ticket) {
    this.editingTicket = ticket;
    this.ticketForm.patchValue(ticket);
  }

  resetForm() {
    this.ticketForm.reset({ name: '', email: '', issue: '', date: new Date().toISOString() });
    this.editingTicket = null;
  }
}
