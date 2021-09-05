import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewLeadComponent } from './components/view-lead/view-lead.component';
import { ListLeadsComponent } from './components/list-leads/list-leads.component';
import { ListProjectsComponent } from './components/list-projects/list-projects.component';
import { DashAdminComponent } from './components/dash-admin/dash-admin.component';
import { DashUserComponent } from './components/dash-user/dash-user.component';

const routes: Routes = [

    { path: 'login', component: LoginComponent },

    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },

    { path: 'projects', component: ListProjectsComponent, canActivate: [AuthGuardService] },

    { path: 'leads', component: ListLeadsComponent, canActivate: [AuthGuardService] },
    { path: 'leads/:leadId', component: ViewLeadComponent, canActivate: [AuthGuardService] },

    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '404', component: PageNotFoundComponent },
    { path: '**', redirectTo: '404' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
