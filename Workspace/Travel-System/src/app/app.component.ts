import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PackingListComponent } from './packing-list/packing-list.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule, PackingListComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent {
  country = 'United Kingdom';
}
