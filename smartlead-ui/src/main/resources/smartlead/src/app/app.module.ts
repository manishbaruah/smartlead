import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';

import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashAdminComponent } from './components/dash-admin/dash-admin.component';
import { DashUserComponent } from './components/dash-user/dash-user.component';
import { SaveProjectComponent } from './components/save-project/save-project.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SaveLeadComponent } from './components/save-lead/save-lead.component';
import { SaveQuickLeadComponent } from './components/save-quick-lead/save-quick-lead.component';
import { ListLeadsComponent } from './components/list-leads/list-leads.component';
import { ListProjectsComponent } from './components/list-projects/list-projects.component';
import { ViewLeadComponent } from './components/view-lead/view-lead.component';
import { TabLeadDetailsComponent } from './components/tab-lead-details/tab-lead-details.component';
import { TabActivityHistoryComponent } from './components/tab-activity-history/tab-activity-history.component';
import { TabTasksComponent } from './components/tab-tasks/tab-tasks.component';
import { TabNotesComponent } from './components/tab-notes/tab-notes.component';
import { TabDocumentsComponent } from './components/tab-documents/tab-documents.component';
import { SaveTaskComponent } from './components/save-task/save-task.component';
import { SaveNoteComponent } from './components/save-note/save-note.component';
import { SaveDocumentComponent } from './components/save-document/save-document.component';
import { HttpConfigInterceptor } from './http-confg-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    DashboardComponent,
    NavBarComponent,
    FooterComponent,
    DashAdminComponent,
    DashUserComponent,
    SaveProjectComponent,
    UserProfileComponent,
    SaveLeadComponent,
    SaveQuickLeadComponent,
    ListLeadsComponent,
    ListProjectsComponent,
    ViewLeadComponent,
    TabLeadDetailsComponent,
    TabActivityHistoryComponent,
    TabTasksComponent,
    TabNotesComponent,
    TabDocumentsComponent,
    SaveTaskComponent,
    SaveNoteComponent,
    SaveDocumentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    InternationalPhoneNumberModule
  ],
  entryComponents: [
    UserProfileComponent,
    SaveProjectComponent,
    SaveLeadComponent,
    SaveQuickLeadComponent,
    SaveTaskComponent,
    SaveNoteComponent,
    SaveDocumentComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
