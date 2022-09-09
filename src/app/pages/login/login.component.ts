import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ROUTES } from 'src/app/utils/constants/routes.enum';
import { TForm } from 'src/app/utils/types/form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  protected loading: boolean = false;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(formValue: TForm) {
    this.loading = true;
    this.authService.login(formValue).subscribe({
      next: () => this.router.navigate([ROUTES.HOME]),
      error: () => (this.loading = false),
    });
  }
}
