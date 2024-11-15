import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { ReadTicketsComponent } from './read-tickets/read-tickets.component';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';
import { DeleteTicketComponent } from './delete-ticket/delete-ticket.component';
import { FAQComponent } from './faq/faq.component';

const routes: Routes = [
  { path: 'create-ticket', component: CreateTicketComponent },
  { path: 'read-tickets', component: ReadTicketsComponent },
  { path: 'update-ticket/:id', component: UpdateTicketComponent },
  { path: 'delete-ticket', component: DeleteTicketComponent },
  { path: 'faq', component: FAQComponent },
  { path: '', redirectTo: '/read-tickets', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

