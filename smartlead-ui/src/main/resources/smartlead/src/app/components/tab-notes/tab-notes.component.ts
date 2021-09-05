import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/models/note';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-tab-notes',
  templateUrl: './tab-notes.component.html',
  styleUrls: ['./tab-notes.component.css']
})
export class TabNotesComponent implements OnInit {

  @Input() leadId: number;

  notes: Note[];

  constructor(private restService: RestService) { }

  ngOnInit() {
    this.getNotes(this.leadId);
  }

  private getNotes(leadId: number) {
    this.restService.getLeadNotes(leadId).subscribe(notes => {
      this.notes = notes;
    });
  }
}
