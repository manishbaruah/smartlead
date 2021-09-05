import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { SaveProjectComponent } from '../save-project/save-project.component';
import { ListProjectsComponent } from '../list-projects/list-projects.component';
import { SaveLeadComponent } from '../save-lead/save-lead.component';
import { SaveQuickLeadComponent } from '../save-quick-lead/save-quick-lead.component';
import { ListLeadsComponent } from '../list-leads/list-leads.component';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  username: string;

  constructor(private ngbModal: NgbModal, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.username = this.authenticationService.getUser().username;
  }

  openSaveProjectModal() {
    event.preventDefault();
    this.ngbModal.open(SaveProjectComponent, { size: 'xl', backdrop: 'static' });
  }

  openSaveLeadModal() {
    event.preventDefault();
    this.ngbModal.open(SaveLeadComponent, { size: 'xl', backdrop: 'static', scrollable: true });
  }

  openSaveQuickLeadModal() {
    event.preventDefault();
    this.ngbModal.open(SaveQuickLeadComponent, { size: 'lg', backdrop: 'static' });
  }

  openListProjectsModal() {
    event.preventDefault();
    this.ngbModal.open(ListProjectsComponent, { size: 'xl', backdrop: 'static' });
  }

  openListLeadsModal() {
    event.preventDefault();
    this.ngbModal.open(ListLeadsComponent, { size: 'xl', backdrop: 'static' });
  }

  openUserProfileModal() {
    event.preventDefault();
    this.ngbModal.open(UserProfileComponent, { backdrop: 'static' });
  }

  logout() {
    event.preventDefault();
    if (confirm("Confirm logout?")) {
      this.authenticationService.logout();
    }
  }
}
