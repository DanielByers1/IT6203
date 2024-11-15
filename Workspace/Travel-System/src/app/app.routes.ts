import { Routes } from '@angular/router';
import { PackingListComponent } from './packing-list/packing-list.component';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'packing-list', 
    pathMatch: 'full' 
  },
  { 
    path: 'packing-list', 
    component: PackingListComponent 
  },
  { 
    path: '**', 
    redirectTo: 'packing-list' 
  }
];
