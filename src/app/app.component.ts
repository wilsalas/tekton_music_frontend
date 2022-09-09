import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { IUser } from './utils/interfaces/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  protected currentUser: IUser | null = null;

  constructor(private router: Router, private authService: AuthService) {
    this.authService.currentUser.subscribe(
      (current) => (this.currentUser = current)
    );
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
