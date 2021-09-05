import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LeadSource } from 'src/app/models/lead-source';
import { RestService } from 'src/app/services/rest.service';
import { EnumAlertType } from 'src/app/models/enum-alert-type';
import { Alert } from 'src/app/models/alert';
import { Lead } from 'src/app/models/lead';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LeadStage } from 'src/app/models/lead-stage';

@Component({
  selector: 'app-save-quick-lead',
  templateUrl: './save-quick-lead.component.html',
  styleUrls: ['./save-quick-lead.component.css']
})
export class SaveQuickLeadComponent implements OnInit {

  saveLeadForm: FormGroup;
  loading: boolean = false;
  alert: Alert;
  loggedInUser: User;
  leadSources: LeadSource[];
  defaultLeadStage: LeadStage;

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private restService: RestService,
    private authenticationService: AuthenticationService) {
    this.saveLeadForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      website: '',
      leadSource: '',
      notes: '',
    });
    this.alert = new Alert();
  }

  ngOnInit() {
    this.loadLeadSources();
    this.loggedInUser = this.authenticationService.getUser();
    this.setDefaultLeadStage();
  }

  saveAndAddNew(formData: any) {
    this.saveLead(formData);
  }

  saveAndClose(formData: any) {
    this.saveLead(formData);
    this.activeModal.close();
  }

  private setDefaultLeadStage() {
    this.restService.getDefaultLeadStage().subscribe(stage => {
      this.defaultLeadStage = stage;
    })
  }

  private saveLead(formData: any) {
    let lead: Lead = formData;
    lead.owner = this.loggedInUser;
    lead.createdBy = this.loggedInUser.username;
    lead.modifiedBy = this.loggedInUser.username;
    lead.leadStage = this.defaultLeadStage;
    this.restService.addLead(lead).subscribe(response => {
      this.setAlert('Lead added successfully', EnumAlertType.Success);
      this.saveLeadForm.reset();
    }, error => {
      this.setAlert(error.message, EnumAlertType.Error);
    });
  }

  private loadLeadSources() {
    this.restService.getLeadSources().subscribe(leadSources => {
      this.leadSources = leadSources;
    });
  }

  private setAlert(message: string, type: EnumAlertType) {
    this.alert.message = message;
    this.alert.type = type;
  }
}