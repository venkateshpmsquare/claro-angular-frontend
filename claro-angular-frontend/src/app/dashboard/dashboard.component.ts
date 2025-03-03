import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule], // Add CommonModule for *ngIf support
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user = localStorage.getItem('user');

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('token'); // Remove token from storage
    this.router.navigate(['/login']); // Redirect to login
  }

  isAdmin(): boolean {
    return localStorage.getItem('role') === 'admin';
  }
  
}
