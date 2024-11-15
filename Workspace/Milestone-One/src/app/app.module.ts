import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes'; // Your routing module

import { AppComponent } from './app.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { ReadTicketsComponent } from './read-tickets/read-tickets.component';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';
import { DeleteTicketComponent } from './delete-ticket/delete-ticket.component';
import { FAQComponent } from './faq/faq.component';
import { TicketService } from './ticket.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateTicketComponent,
    ReadTicketsComponent,
    UpdateTicketComponent,
    DeleteTicketComponent,
    FAQComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // This imports RouterModule internally
    FormsModule
  ],
  providers: [TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
