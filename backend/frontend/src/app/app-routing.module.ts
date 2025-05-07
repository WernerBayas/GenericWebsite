import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '/login', component: LoginComponent }, // Define the login route
    { path: '', component: AppComponent }, // Example default route
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
