import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
  RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ServiceTicket_UI';

  isLoggedIn(): boolean {
    return localStorage.getItem('btn') === 'true';
  }

  isAdmin(): boolean {
    return localStorage.getItem('role') === "ROLE_ADMIN"
  }

  logout(): void{
    localStorage.removeItem('btn');
    localStorage.removeItem('email');
    localStorage.removeItem('tokenJwt');
    localStorage.removeItem('role');
  }
}

