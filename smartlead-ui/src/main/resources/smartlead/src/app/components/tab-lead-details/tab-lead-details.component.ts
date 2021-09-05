import { Component, Input } from '@angular/core';
import { Lead } from 'src/app/models/lead';

@Component({
  selector: 'app-tab-lead-details',
  templateUrl: './tab-lead-details.component.html',
  styleUrls: ['./tab-lead-details.component.css']
})
export class TabLeadDetailsComponent {

  @Input() lead: Lead;

  constructor() {
  }

}
