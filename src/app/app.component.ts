import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersModule } from './users/users.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UsersModule],
  templateUrl: './app.component.html',
  // templateUrl: './FirtApplication/src/app/users/add-user',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FirtApplication';
}
