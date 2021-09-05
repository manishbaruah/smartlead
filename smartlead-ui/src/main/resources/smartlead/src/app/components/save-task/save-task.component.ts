import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Lead } from 'src/app/models/lead';
import { EnumTaskType } from 'src/app/models/enum-task-type';
import { Task } from 'src/app/models/task';
import { EnumAlertType } from 'src/app/models/enum-alert-type';
import { Alert } from 'src/app/models/alert';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/user';
import { RestService } from 'src/app/services/rest.service';
import { EnumTaskStatus } from 'src/app/models/enum-task-status';
import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-save-task',
  templateUrl: './save-task.component.html',
  styleUrls: ['./save-task.component.css']
})
export class SaveTaskComponent implements OnInit {

  saveTaskForm: FormGroup;
  loading: boolean = false;
  alert: Alert;
  lead: Lead;
  task: Task;
  taskType: string;
  title: string;
  taskSpecificFields: string[];
  loggedInUser: User;
  attachment: File;
  attachmentName: string;

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private authenticationService: AuthenticationService,
    private restService: RestService) {
    this.saveTaskForm = this.formBuilder.group({
      owner: '',
      associatedLead: '',
      subject: '',
      location: '',
      scheduleDate: '',
      fromDate: '',
      fromTime: '',
      toDate: '',
      toTime: '',
      description: '',
      marketingOfficer: '',
      attachment: '',
      organizer: '',
      taskCompleted: ''
    });
    this.alert = new Alert();
  }

  ngOnInit() {
    this.initTaskSpecificSettings();
    this.loggedInUser = this.authenticationService.getUser();
    if (!this.task) {
      this.saveTaskForm.get('owner').setValue(this.lead.owner.username);
      this.saveTaskForm.get('associatedLead').setValue(this.lead.firstName + ' ' + this.lead.lastName);
      this.saveTaskForm.get('organizer').setValue(this.loggedInUser.username);
    } else {
      console.log(this.task);
      this.populateFormOnEdit();
    }
  }

  onFileChange(event) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.attachment = file;
    }
  }

  populateFormOnEdit() {
    this.saveTaskForm.patchValue({
      owner: this.task.owner.username,
      associatedLead: (this.task.lead.firstName + ' ' + this.task.lead.lastName),
      organizer: this.task.organizer.username,
      subject: this.task.subject,
      location: this.task.location,
      scheduleDate: this.task.scheduleFrom.split(' ')[0],
      fromDate: this.task.scheduleFrom.split(' ')[0],
      fromTime: this.task.scheduleFrom.split(' ')[1],
      toDate: this.task.scheduleTo ? this.task.scheduleTo.split(' ')[0] : '',
      toTime: this.task.scheduleTo ? this.task.scheduleTo.split(' ')[1] : '',
      description: this.task.description,
      marketingOfficer: this.task.marketingOfficer,
      attachment: '',
      taskCompleted: this.task.completedOn ? true : false
    });
    this.attachmentName = this.task.attachmentName;
  }

  saveTask(formData: any) {
    let task: Task = new Task();
    if (this.task) {
      task.leadTaskId = this.task.leadTaskId;
    }
    task.taskType = this.taskType;
    task.owner = this.lead.owner;
    let lead: Lead = new Lead();
    lead.leadId = this.lead.leadId;
    task.lead = lead;
    task.organizer = this.loggedInUser;
    task.subject = formData.subject;
    if (formData.location) {
      task.location = formData.location;
    }
    if (formData.scheduleDate) {
      task.scheduleFrom = formData.scheduleDate + ' ' + '23:59:00';
    }
    if (formData.fromDate && formData.toDate) {
      task.scheduleFrom = formData.fromDate + ' ' + formData.fromTime + ':00';
      task.scheduleTo = formData.toDate + ' ' + formData.toTime + ':00';
    }
    task.description = formData.description;
    if (formData.marketingOfficer) {
      task.marketingOfficer = formData.marketingOfficer;
    }
    if (!this.task) {
      task.createdBy = this.loggedInUser.username;
      task.updatedBy = task.createdBy;
    } else {
      task.createdBy = this.task.createdBy;
      task.updatedBy = this.loggedInUser.username;
      task.status = this.task.status;
    }

    if (this.task && this.task.status !== EnumTaskStatus.Completed) {
      if (formData.taskCompleted) {
        task.status = EnumTaskStatus.Completed;
      }
    }

    console.log(task);

    if (this.task) {
      this.restService.saveLeadTask(this.lead.leadId, task, this.attachment).subscribe(response => {
        this.setAlert('Task saved successfully', EnumAlertType.Success);
        if (response.attachmentName) {
          this.attachmentName = response.attachmentName;
        }
      }, error => {
        console.error(error);
        this.setAlert('Server side error in saving task', EnumAlertType.Error);
      });
    } else {
      this.restService.addLeadTask(this.lead.leadId, task, this.attachment).subscribe(response => {
        this.saveTaskForm.reset();
        this.setAlert('Task added successfully', EnumAlertType.Success);
      }, error => {
        console.error(error);
        this.setAlert('Server side error in adding task', EnumAlertType.Error);
      });
    }
  }

  downLoadAttachment() {
    event.preventDefault();
    this.restService.downLoadTaskAttachment(this.task.lead.leadId, this.task.leadTaskId).subscribe(response => {
      const blob = new Blob([response]);
      fileSaver.saveAs(blob, this.attachmentName);
    });
  }

  private initTaskSpecificSettings() {
    this.taskSpecificFields = [];
    switch (this.taskType) {
      case EnumTaskType.Meeting: {
        this.title = this.task ? 'Edit Meeting task' : 'Create Meeting task';
        if (!this.task) this.saveTaskForm.get('subject').setValue('Meeting: ');
        this.taskSpecificFields.push('location');
        this.taskSpecificFields.push('fromDate');
        this.taskSpecificFields.push('fromTime');
        this.taskSpecificFields.push('toDate');
        this.taskSpecificFields.push('toTime');
        break;
      }
      case EnumTaskType.SiteVisit: {
        this.title = this.task ? 'Edit Site Visit task' : 'Create Site Visit task';
        if (!this.task) this.saveTaskForm.get('subject').setValue('Site Visit: ');
        this.taskSpecificFields.push('location');
        this.taskSpecificFields.push('fromDate');
        this.taskSpecificFields.push('fromTime');
        this.taskSpecificFields.push('toDate');
        this.taskSpecificFields.push('toTime');
        this.taskSpecificFields.push('marketingOfficer');
        this.taskSpecificFields.push('attachment');
        break;
      }
      case EnumTaskType.FollowUp: {
        this.title = this.task ? 'Edit Follow Up task' : 'Create Follow Up task';
        if (!this.task) this.saveTaskForm.get('subject').setValue('Follow-Up: ');
        this.taskSpecificFields.push('scheduleDate');
        break;
      }
      case EnumTaskType.PhoneCall: {
        this.title = this.task ? 'Edit Phone Call task' : 'Create Phone Call task';
        if (!this.task) this.saveTaskForm.get('subject').setValue('Phone Call: ');
        this.taskSpecificFields.push('scheduleDate');
        break;
      }
      case EnumTaskType.Email: {
        this.title = this.task ? 'Edit Email task' : 'Create Email task';
        if (!this.task) this.saveTaskForm.get('subject').setValue('Email: ');
        this.taskSpecificFields.push('scheduleDate');
        break;
      }
    }
  }

  private setAlert(message: string, type: EnumAlertType) {
    this.alert.message = message;
    this.alert.type = type;
  }

}
