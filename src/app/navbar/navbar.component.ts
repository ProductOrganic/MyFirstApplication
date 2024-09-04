import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavbarComponent],
  // templateUrl: './app.component.html',
  templateUrl:'./navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
title= 'navbar component';
}
