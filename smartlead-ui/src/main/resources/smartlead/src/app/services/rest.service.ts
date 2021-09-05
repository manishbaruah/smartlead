import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { SearchModel } from '../models/search-model';
import { environment } from 'src/environments/environment';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Project } from '../models/project';
import { ProjectType } from '../models/project-type';
import { Amenity } from '../models/amenity';
import { ProjectStage } from '../models/project-stage';
import { Builder } from '../models/builder';
import { LoginRequest } from '../models/login-request';
import { User } from '../models/user';
import { Organization } from '../models/organization';
import { Lead } from '../models/lead';
import { LeadStage } from '../models/lead-stage';
import { LeadSource } from '../models/lead-source';
import { PageableModel } from '../models/pageable-model';
import { Document } from 'src/app/models/document';
import { DocumentType } from 'src/app/models/document-type';
import { Note } from '../models/note';
import { Task } from '../models/task';
import { TaskSummary } from '../models/task-summary';
import { BusinessOverview } from '../models/business-overview';
import { Activity } from '../models/activity';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  /** USER SERVICE start **/

  getOrganizations(): Observable<Organization[]> {
    return this.http.get<Organization[]>(this.getAPIUrl(environment.userAPIPrefix, '/organizations'))
      .pipe(
        catchError(this.handleError<Organization[]>())
      );
  }

  login(loginRequest: LoginRequest): Observable<User> {
    return this.http.post<User>(this.getAPIUrl(environment.loginUrl), loginRequest)
      .pipe(
        catchError(this.handleLoginError<User>())
      );
  }

  saveUserDetails(user: User): Observable<User> {
    return this.http.put<User>(this.getAPIUrl(environment.userAPIPrefix, '/users/' + user.userId), user)
      .pipe(
        catchError(this.handleError<User>())
      );
  }

  getAllEmployees(): Observable<User[]> {
    return this.http.get<User[]>(this.getAPIUrl(environment.userAPIPrefix, '/employees'))
      .pipe(
        catchError(this.handleError<User[]>())
      );
  }

  /** PROJECT SERVICE start **/

  getProjects(): Observable<Project[]> {
    let searchObj: SearchModel = new SearchModel();
    return this.http.post<Project[]>(this.getAPIUrl(environment.projectAPIPrefix, '/projects/search'), searchObj)
      .pipe(
        catchError(this.handleError<Project[]>())
      );
  }

  searchProjects(searchObj: SearchModel): Observable<Project[]> {
    return this.http.post<Project[]>(this.getAPIUrl(environment.projectAPIPrefix, '/projects/search'), searchObj)
      .pipe(
        catchError(this.handleError<Project[]>())
      );
  }

  fetchProject(projectId: number): Observable<Project> {
    return this.http.get<Project>(this.getAPIUrl(environment.projectAPIPrefix, '/projects/' + projectId))
      .pipe(
        catchError(this.handleError<Project>())
      );
  }

  getProjectTypes(): Observable<ProjectType[]> {
    return this.http.get<ProjectType[]>(this.getAPIUrl(environment.projectAPIPrefix, '/projectTypes'))
      .pipe(
        catchError(this.handleError<ProjectType[]>())
      );
  }

  getProjectStages(): Observable<ProjectStage[]> {
    return this.http.get<ProjectStage[]>(this.getAPIUrl(environment.projectAPIPrefix, '/projectStages'))
      .pipe(
        catchError(this.handleError<ProjectStage[]>())
      );
  }

  getBuilders(): Observable<Builder[]> {
    return this.http.get<Builder[]>(this.getAPIUrl(environment.projectAPIPrefix, '/builders'))
      .pipe(
        catchError(this.handleError<Builder[]>())
      );
  }

  getAmenities(): Observable<Amenity[]> {
    return this.http.get<Amenity[]>(this.getAPIUrl(environment.projectAPIPrefix, '/amenities'))
      .pipe(
        catchError(this.handleError<Amenity[]>())
      );
  }

  addProject(project: Project, file: File): Observable<Project> {
    const formData = new FormData();
    formData.append('project', new Blob([
      JSON.stringify(project)
    ], {
      type: "application/json"
    }));
    if (file) {
      formData.append('file', file, file.name);
    }
    return this.http.post<Project>(this.getAPIUrl(environment.projectAPIPrefix, '/projects'), formData)
      .pipe(
        catchError(this.handleError<Project>())
      );
  }

  saveProject(project: Project, file: File): Observable<Project> {
    const formData = new FormData();
    formData.append('project', new Blob([
      JSON.stringify(project)
    ], {
      type: "application/json"
    }));
    if (file) {
      formData.append('file', file, file.name);
    }
    return this.http.put<Project>(this.getAPIUrl(environment.projectAPIPrefix, '/projects/' + project.projectId), formData)
      .pipe(
        catchError(this.handleError<Project>())
      );
  }

  deleteProject(projectId: number): Observable<string> {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.delete<string>(this.getAPIUrl(environment.projectAPIPrefix, '/projects/' + projectId),
      { headers, responseType: 'text' as 'json' })
      .pipe(
        catchError(this.handleError<string>())
      );
  }

  downLoadBrochure(projectId: number) {
    return this.http.get(this.getAPIUrl(environment.projectAPIPrefix, '/projects/' + projectId, '/file'), { responseType: 'blob' })
      .pipe(
        catchError(this.handleError<any>())
      );
  }

  /** LEAD SERVICE start **/

  searchLeads(pageableModel: PageableModel<Lead>): Observable<PageableModel<Lead>> {
    return this.http.post<PageableModel<Lead>>(this.getAPIUrl(environment.leadAPIPrefix, '/leads/search'), pageableModel)
      .pipe(
        catchError(this.handleError<PageableModel<Lead>>())
      );
  }

  fetchLead(leadId: number): Observable<Lead> {
    return this.http.get<Lead>(this.getAPIUrl(environment.leadAPIPrefix, '/leads/' + leadId))
      .pipe(
        catchError(this.handleError<Lead>())
      );
  }

  getLeadStages(): Observable<LeadStage[]> {
    return this.http.get<LeadStage[]>(this.getAPIUrl(environment.leadAPIPrefix, '/leadStages'))
      .pipe(
        catchError(this.handleError<LeadStage[]>())
      );
  }

  getDefaultLeadStage(): Observable<LeadStage> {
    return this.http.get<LeadStage>(this.getAPIUrl(environment.leadAPIPrefix, '/getDefaultleadStage'))
      .pipe(
        catchError(this.handleError<LeadStage>())
      );
  }

  getLeadSources(): Observable<LeadSource[]> {
    return this.http.get<LeadSource[]>(this.getAPIUrl(environment.leadAPIPrefix, '/leadSources'))
      .pipe(
        catchError(this.handleError<LeadSource[]>())
      );
  }

  getLeadOwners(): Observable<User[]> {
    return this.http.get<User[]>(this.getAPIUrl(environment.leadAPIPrefix, '/leadOwners'))
      .pipe(
        catchError(this.handleError<User[]>())
      );
  }

  addLead(lead: Lead): Observable<Lead> {
    return this.http.post<Lead>(this.getAPIUrl(environment.leadAPIPrefix, '/leads'), lead)
      .pipe(
        catchError(this.handleError<Lead>())
      );
  }

  saveLead(lead: Lead): Observable<Lead> {
    return this.http.put<Lead>(this.getAPIUrl(environment.leadAPIPrefix, '/leads/' + lead.leadId), lead)
      .pipe(
        catchError(this.handleError<Lead>())
      );
  }

  getDocumentTypes(): Observable<DocumentType[]> {
    return this.http.get<DocumentType[]>(this.getAPIUrl(environment.leadAPIPrefix, '/documentTypes'))
      .pipe(
        catchError(this.handleError<DocumentType[]>())
      );
  }

  addLeadDocument(leadId: number, document: Document, file: File): Observable<Document> {
    const formData = new FormData();
    formData.append('document', new Blob([
      JSON.stringify(document)
    ], {
      type: "application/json"
    }));
    if (file) {
      formData.append('file', file, file.name);
    }
    return this.http.post<Document>(this.getAPIUrl(environment.leadAPIPrefix, '/leads/' + leadId, '/documents'), formData)
      .pipe(
        catchError(this.handleError<Document>())
      );
  }

  getLeadDocuments(leadId: number): Observable<Document[]> {
    return this.http.get<Document[]>(this.getAPIUrl(environment.leadAPIPrefix, '/leads/' + leadId, '/documents'))
      .pipe(
        catchError(this.handleError<Document[]>())
      );
  }

  deleteLeadDocument(leadId: number, leadDocumentId: number): Observable<string> {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.delete<string>(this.getAPIUrl(environment.leadAPIPrefix, '/leads/' + leadId, '/documents/') + leadDocumentId,
      { headers, responseType: 'text' as 'json' })
      .pipe(
        catchError(this.handleError<string>())
      );
  }

  addLeadNote(leadId: number, note: Note, file: File): Observable<Note> {
    const formData = new FormData();
    formData.append('note', new Blob([
      JSON.stringify(note)
    ], {
      type: "application/json"
    }));
    if (file) {
      formData.append('file', file, file.name);
    }
    return this.http.post<Note>(this.getAPIUrl(environment.leadAPIPrefix, '/leads/' + leadId, '/notes'), formData)
      .pipe(
        catchError(this.handleError<Note>())
      );
  }

  getLeadNotes(leadId: number): Observable<Note[]> {
    return this.http.get<Note[]>(this.getAPIUrl(environment.leadAPIPrefix, '/leads/' + leadId, '/notes'))
      .pipe(
        catchError(this.handleError<Note[]>())
      );
  }

  deleteLeadNote(leadId: number, leadNoteId: number): Observable<string> {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.delete<string>(this.getAPIUrl(environment.leadAPIPrefix, '/leads/' + leadId, '/notes/' + leadNoteId),
      { headers, responseType: 'text' as 'json' })
      .pipe(
        catchError(this.handleError<string>())
      );
  }

  addLeadTask(leadId: number, task: Task, file: File): Observable<Task> {
    const formData = new FormData();
    formData.append('task', new Blob([
      JSON.stringify(task)
    ], {
      type: "application/json"
    }));
    if (file) {
      formData.append('file', file, file.name);
    }
    return this.http.post<Task>(this.getAPIUrl(environment.leadAPIPrefix, '/leads/' + leadId, '/tasks'), formData)
      .pipe(
        catchError(this.handleError<Task>())
      );
  }

  saveLeadTask(leadId: number, task: Task, file: File): Observable<Task> {
    const formData = new FormData();
    formData.append('task', new Blob([
      JSON.stringify(task)
    ], {
      type: "application/json"
    }));
    if (file) {
      formData.append('file', file, file.name);
    }
    return this.http.put<Task>(this.getAPIUrl(environment.leadAPIPrefix, '/leads/' + leadId, '/tasks/' + task.leadTaskId), formData)
      .pipe(
        catchError(this.handleError<Task>())
      );
  }

  getLeadTasks(leadId: number, status: string): Observable<Task[]> {
    return this.http.get<Task[]>(this.getAPIUrl(environment.leadAPIPrefix, '/leads/' + leadId, '/tasks?status=' + status))
      .pipe(
        catchError(this.handleError<Task[]>())
      );
  }

  deleteLeadTask(leadId: number, leadTaskId: number): Observable<string> {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.delete<string>(this.getAPIUrl(environment.leadAPIPrefix, '/leads/' + leadId, '/tasks/' + leadTaskId),
      { headers, responseType: 'text' as 'json' })
      .pipe(
        catchError(this.handleError<string>())
      );
  }

  downLoadTaskAttachment(leadId: number, leadTaskId: number) {
    return this.http.get(this.getAPIUrl(environment.leadAPIPrefix, '/leads/' + leadId, '/tasks/' + leadTaskId), { responseType: 'blob' })
      .pipe(
        catchError(this.handleError<any>())
      );
  }

  getTaskSummaryForUser(userId: number, interval: string): Observable<TaskSummary> {
    return this.http.get<TaskSummary>(this.getAPIUrl(environment.leadAPIPrefix, '/user/' + userId, '/taskSummary?interval=' + interval))
      .pipe(
        catchError(this.handleError<TaskSummary>())
      );
  }

  getBusinessOverviewForAdmin(interval: string): Observable<BusinessOverview> {
    return this.http.get<BusinessOverview>(this.getAPIUrl(environment.leadAPIPrefix, '/admin/businessOverview?interval=' + interval))
      .pipe(
        catchError(this.handleError<BusinessOverview>())
      );
  }

  getTaskSummaryForAdmin(users: User[], interval: string): Observable<TaskSummary[]> {
    return this.http.post<TaskSummary[]>(this.getAPIUrl(environment.leadAPIPrefix, '/admin/taskSummary?interval=' + interval), users)
      .pipe(
        catchError(this.handleError<TaskSummary[]>())
      );
  }

  getLeadActivities(leadId: number): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.getAPIUrl(environment.leadAPIPrefix, '/leads/' + leadId, '/activities'))
      .pipe(
        catchError(this.handleError<Activity[]>())
      );
  }

  private getAPIUrl(...args: string[]) {
    let url = environment.baseUrl;
    args.forEach(arg => {
      url += arg;
    });
    return url;
  }

  private handleError<T>() {
    return (error: HttpErrorResponse): Observable<T> => {
      if (error.status === 403) {
        return throwError('Unauthorized operation');
      }
      return throwError(error.error);
    };
  }

  private handleLoginError<T>() {
    return (error: HttpErrorResponse): Observable<T> => {
      if (error.status === 403) {
        return throwError('Login failed: Invalid credentials');
      }
      return throwError(error.error);
    };
  }
}
