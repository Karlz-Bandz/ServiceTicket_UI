import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-atm',
  standalone: true,
  imports: [
    RouterModule,
    MatButtonModule
  ],
  templateUrl: './atm.component.html',
  styleUrl: './atm.component.scss'
})
export class AtmComponent {

  isAdmin(): boolean {
      return localStorage.getItem('role') === "ROLE_ADMIN";
  }
}
