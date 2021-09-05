import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Lead } from 'src/app/models/lead';
import { ActivatedRoute } from '@angular/router';
import { SaveTaskComponent } from '../save-task/save-task.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SaveNoteComponent } from '../save-note/save-note.component';
import { SaveDocumentComponent } from '../save-document/save-document.component';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-view-lead',
  templateUrl: './view-lead.component.html',
  styleUrls: ['./view-lead.component.css']
})
export class ViewLeadComponent implements OnInit {

  lead: Lead;

  constructor(private location: Location, private route: ActivatedRoute, private ngbModal: NgbModal,
    private restService: RestService) { }

  ngOnInit() {
    const leadId = this.route.snapshot.params['leadId'];
    if (!leadId) {
      this.location.back();
    }
    this.fetchLeadDetails(leadId);
  }

  goBack() {
    this.location.back();
  }

  openSaveTaskModal(taskType: string) {
    event.preventDefault();
    const modalRef = this.ngbModal.open(SaveTaskComponent, { size: 'lg', backdrop: 'static' });
    const component = modalRef.componentInstance as SaveTaskComponent;
    component.taskType = taskType;
    component.lead = this.lead;
  }

  openSaveNoteModal() {
    event.preventDefault();
    const modalRef = this.ngbModal.open(SaveNoteComponent, { backdrop: 'static' });
    (modalRef.componentInstance as SaveNoteComponent).leadId = this.lead.leadId;
  }

  openSaveDocumentModal() {
    event.preventDefault();
    const modalRef = this.ngbModal.open(SaveDocumentComponent, { backdrop: 'static' });
    (modalRef.componentInstance as SaveDocumentComponent).leadId = this.lead.leadId;
  }

  private fetchLeadDetails(leadId: number) {
    this.restService.fetchLead(leadId).subscribe(lead => {
      this.lead = lead;
      this.lead.ageInDays = this.getAgeInDays(lead.createdOn);
    })
  }

  private getAgeInDays(createdOn: string): number {
    let diff = new Date().getTime() - new Date(createdOn).getTime();
    return Math.ceil(diff / (1000 * 3600 * 24));
  }
}
