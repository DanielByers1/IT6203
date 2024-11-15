import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { ListStudentsComponent } from "./list-students/list-students.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HttpClientModule,
    NavigationMenuComponent,
    ListStudentsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
    title = 'Student App';
}
