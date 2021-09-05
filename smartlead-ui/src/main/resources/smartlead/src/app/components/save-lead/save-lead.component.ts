import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LeadSource } from 'src/app/models/lead-source';
import { Project } from 'src/app/models/project';
import { LeadStage } from 'src/app/models/lead-stage';
import { Lead } from 'src/app/models/lead';
import { RestService } from 'src/app/services/rest.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { EnumAlertType } from 'src/app/models/enum-alert-type';
import { Alert } from 'src/app/models/alert';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-save-lead',
  templateUrl: './save-lead.component.html',
  styleUrls: ['./save-lead.component.css']
})
export class SaveLeadComponent implements OnInit {

  saveLeadForm: FormGroup;
  loading: boolean = false;
  alert: Alert;
  leadSources: LeadSource[];
  leadStages: LeadStage[];
  projects: Project[];
  loggedInUser: User;

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private restService: RestService,
    private authenticationService: AuthenticationService) {
    this.saveLeadForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      website: '',
      doNotSMS: false,
      doNotTrack: false,
      doNotEmail: false,
      doNotCall: false,
      leadSource: '',
      sourceCampaign: '',
      mobile: '',
      sourceMedium: '',
      jobTitle: '',
      leadStage: '',
      owner: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      interestedProjects: '',
      notes: '',
      interestRequirement: ''
    });
    this.alert = new Alert();
  }

  ngOnInit() {
    this.loadProjects();
    this.loadLeadSources();
    this.loadLeadStages();
    this.loggedInUser = this.authenticationService.getUser();
    this.saveLeadForm.get('owner').setValue(this.loggedInUser.username);
  }

  saveAndAddNew(formData: any) {
    this.saveLead(formData);
  }

  saveAndClose(formData: any) {
    this.saveLead(formData);
    this.activeModal.close();
  }

  private saveLead(formData: any) {
    let lead: Lead = formData;
    lead.owner = this.loggedInUser;
    lead.createdBy = this.loggedInUser.username;
    lead.modifiedBy = this.loggedInUser.username;
    this.restService.addLead(lead).subscribe(response => {
      this.setAlert('Lead added successfully', EnumAlertType.Success);
      this.saveLeadForm.reset();
    }, error => {
      this.setAlert(error.message, EnumAlertType.Error);
    });
  }

  private loadProjects() {
    this.restService.getProjects().subscribe(projects => {
      this.projects = projects;
    });
  }

  private loadLeadSources() {
    this.restService.getLeadSources().subscribe(leadSources => {
      this.leadSources = leadSources;
    });
  }

  private loadLeadStages() {
    this.restService.getLeadStages().subscribe(leadStages => {
      this.leadStages = leadStages;
    });
  }

  private setAlert(message: string, type: EnumAlertType) {
    this.alert.message = message;
    this.alert.type = type;
  }
}
