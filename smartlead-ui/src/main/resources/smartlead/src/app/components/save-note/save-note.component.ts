import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Note } from 'src/app/models/note';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { EnumAlertType } from 'src/app/models/enum-alert-type';
import { Alert } from 'src/app/models/alert';
import { Lead } from 'src/app/models/lead';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-save-note',
  templateUrl: './save-note.component.html',
  styleUrls: ['./save-note.component.css']
})
export class SaveNoteComponent {

  @Input() leadId: number;

  saveNoteForm: FormGroup;
  loading: boolean = false;
  alert: Alert;
  attachment: File;

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private authService: AuthenticationService,
    private restService: RestService) {
    this.saveNoteForm = this.formBuilder.group({
      note: '',
      attachment: ''
    });
    this.alert = new Alert();
  }

  onFileChange(event) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.attachment = file;
    }
  }

  saveNote(formData) {
    let note: Note = formData;
    note.createdBy = this.authService.getUser().username; // if not edit mode
    note.updatedBy = note.createdBy; // if not edit mode

    // if edit mode
    // note.updatedBy = this.authService.getUser().username;

    let lead: Lead = new Lead();
    lead.leadId = this.leadId;
    note.lead = lead;
    console.log(note);
    this.restService.addLeadNote(this.leadId, note, this.attachment).subscribe(response => {
      this.setAlert('Note added successfully to Lead', EnumAlertType.Success);
      this.saveNoteForm.reset();
    }, error => {
      console.error(error);
      this.setAlert('Server side error in adding note', EnumAlertType.Error);
    });
  }

  private setAlert(message: string, type: EnumAlertType) {
    this.alert.message = message;
    this.alert.type = type;
  }
}
