import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ROUTES } from './utils/constants/routes.enum';
import { AuthGuard } from './utils/guards/auth.guard';
import { SessionGuard } from './utils/guards/session.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ROUTES.LANDING,
  },
  {
    path: ROUTES.LANDING,
    component: LandingComponent,
    canActivate: [SessionGuard],
  },
  {
    path: ROUTES.LOGIN,
    component: LoginComponent,
    canActivate: [SessionGuard],
  },
  {
    path: ROUTES.REGISTER,
    component: RegisterComponent,
    canActivate: [SessionGuard],
  },
  {
    path: ROUTES.HOME,
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
