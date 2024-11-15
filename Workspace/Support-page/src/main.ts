import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { SupportTicketComponent } from './app/support-ticket/support-ticket.component';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; 

const routes: Routes = [
  { path: '', component: SupportTicketComponent }, 
  
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), 
    importProvidersFrom(ReactiveFormsModule), 
    provideHttpClient(),
  ],
}).catch(err => console.error(err));
