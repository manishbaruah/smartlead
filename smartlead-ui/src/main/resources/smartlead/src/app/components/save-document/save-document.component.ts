import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Document } from 'src/app/models/document';
import { DocumentType } from 'src/app/models/document-type';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { RestService } from 'src/app/services/rest.service';
import { EnumAlertType } from 'src/app/models/enum-alert-type';
import { Alert } from 'src/app/models/alert';
import { Lead } from 'src/app/models/lead';

@Component({
  selector: 'app-save-document',
  templateUrl: './save-document.component.html',
  styleUrls: ['./save-document.component.css']
})
export class SaveDocumentComponent implements OnInit {

  @Input() leadId: number;

  saveDocumentForm: FormGroup;
  documentTypes: DocumentType[];
  loading: boolean = false;
  alert: Alert;
  attachment: File;

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private authService: AuthenticationService,
    private restService: RestService) {
    this.saveDocumentForm = this.formBuilder.group({
      documentType: '',
      description: '',
      attachment: ''
    });
    this.alert = new Alert();
  }

  ngOnInit() {
    this.getDocumentTypes();
  }

  onFileChange(event) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.attachment = file;
    }
  }

  saveDocument(formData) {
    let document: Document = formData;
    document.createdBy = this.authService.getUser().username;
    document.updatedBy = document.createdBy;
    let lead: Lead = new Lead();
    lead.leadId = this.leadId;
    document.lead = lead;
    console.log(document);
    this.restService.addLeadDocument(this.leadId, document, this.attachment).subscribe(response => {
      this.setAlert('Document added successfully to Lead', EnumAlertType.Success);
      this.saveDocumentForm.reset();
    }, error => {
      console.error(error);
      this.setAlert('Server side error in adding document', EnumAlertType.Error);
    });
  }

  private getDocumentTypes() {
    this.restService.getDocumentTypes().subscribe(documentTypes => {
      this.documentTypes = documentTypes;
    });
  }

  private setAlert(message: string, type: EnumAlertType) {
    this.alert.message = message;
    this.alert.type = type;
  }

}
