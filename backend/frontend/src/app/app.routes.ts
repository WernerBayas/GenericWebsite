import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MembershipsComponent } from './memberships/memberships.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StoriesComponent } from './stories/stories.component';
import { WhyComponent } from './why/why.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { create } from 'domain';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

export const routes: Routes = [
    {
        path: "", redirectTo: "home", pathMatch: 'full'
    },
    {
        path: "home", component: HomeComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'contact', component: ContactComponent
    },
    {
        path: 'memberships', component: MembershipsComponent
    },
    {
        path: 'why', component: WhyComponent
    },
    {
        path: 'stories', component: StoriesComponent
    },
    {
        path: 'userDashboard', component: UserDashboardComponent
    },
    {
        path: 'createAccount', component: CreateAccountComponent
    },
    {
        path: 'forgotPassword', component: ForgotPasswordComponent
    },
    {
        path: '**', component: NotFoundComponent
    }
    
];
