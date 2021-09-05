import { Component, OnInit, Input } from '@angular/core';
import { Document } from 'src/app/models/document';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-tab-documents',
  templateUrl: './tab-documents.component.html',
  styleUrls: ['./tab-documents.component.css']
})
export class TabDocumentsComponent implements OnInit {

  @Input() leadId: number;

  documents: Document[];
  showItems: boolean = false;
  showItemsIndex = null;

  constructor(private restService: RestService) { }

  ngOnInit() {
    this.getDocuments(this.leadId);
  }

  onMouseover(index) {
    this.showItems = true;
    this.showItemsIndex = index;
  }

  onMouseout(index) {
    this.showItems = false;
    this.showItemsIndex = index;
  }

  deleteItem(leadDocumentId: number) {
    if (confirm('Confirm document deletion?')) {
      this.restService.deleteLeadDocument(this.leadId, leadDocumentId).subscribe(response => {
        console.log(response);
        this.getDocuments(this.leadId);
      }, error => {
        console.log(error);
      });
    }
  }

  getDocuments(leadId: number) {
    this.restService.getLeadDocuments(leadId).subscribe(documents => {
      this.documents = documents;
    });
  }
}
