import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/services/register.service';
import { ROUTES } from 'src/app/utils/constants/routes.enum';
import { TForm } from 'src/app/utils/types/form';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  protected loading: boolean = false;
  constructor(
    private registerService: RegisterService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(formValue: TForm) {
    this.loading = true;
    this.registerService.register(formValue).subscribe({
      next: (message) => {
        this.toastrService
          .success(message, 'Success', { timeOut: 1000 })
          .onHidden.subscribe({
            next: () => this.router.navigate([ROUTES.LOGIN]),
          });
      },
      error: () => (this.loading = false),
    });
  }
}
