import { Routes } from '@angular/router';
import { SigninComponent } from './pages/auth-page/signin/signin.component';
import { SignupComponent } from './pages/auth-page/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent }
];
