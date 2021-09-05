import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Lead } from 'src/app/models/lead';
import { LeadSource } from 'src/app/models/lead-source';
import { LeadStage } from 'src/app/models/lead-stage';
import { SearchModel } from 'src/app/models/search-model';
import { FieldFilter } from 'src/app/models/field-filter';
import { RestService } from 'src/app/services/rest.service';
import { User } from 'src/app/models/user';
import { PageableModel } from 'src/app/models/pageable-model';

@Component({
  selector: 'app-list-leads',
  templateUrl: './list-leads.component.html',
  styleUrls: ['./list-leads.component.css']
})
export class ListLeadsComponent implements OnInit {

  searchForm: FormGroup;
  loading: boolean = false;
  leads: Lead[];
  leadSources: LeadSource[];
  leadStages: LeadStage[];
  leadOwners: User[];

  page = 1;
  pageSize = 10;
  recordsPerPage: number;
  totalRecords: number;

  leadStageValue = 0;
  leadSourceValue = 0;
  ownerValue = 0;

  enableEdit: boolean = false;
  enableEditIndex = null;

  constructor(private formBuilder: FormBuilder, private restService: RestService) {
    this.searchForm = this.formBuilder.group({
      searchText: ''
    });
  }

  ngOnInit() {
    this.loadLeadSources();
    this.loadLeadStages();
    this.loadLeadOwners();
    this.searchLeads();
  }

  searchLeads() {
    let searchModel: SearchModel = new SearchModel();
    searchModel.searchTerm = this.searchForm.get('searchText').value;

    let fieldFilters: FieldFilter[] = [];

    if (this.leadStageValue !== 0) {
      let leadStageFilter: FieldFilter = new FieldFilter();
      leadStageFilter.fieldName = 'leadStage';
      leadStageFilter.fieldValue = this.leadStageValue;
      fieldFilters.push(leadStageFilter);
    }

    if (this.leadSourceValue !== 0) {
      let leadSourceFilter: FieldFilter = new FieldFilter();
      leadSourceFilter.fieldName = 'leadSource';
      leadSourceFilter.fieldValue = this.leadSourceValue;
      fieldFilters.push(leadSourceFilter);
    }

    if (this.ownerValue !== 0) {
      let ownerFilter: FieldFilter = new FieldFilter();
      ownerFilter.fieldName = 'owner';
      ownerFilter.fieldValue = this.ownerValue;
      fieldFilters.push(ownerFilter);
    }

    searchModel.fieldFilters = fieldFilters;
    this.doSearch(searchModel);
  }

  enableEditMode(e, i) {
    this.enableEdit = true;
    this.enableEditIndex = i;
  }

  cancel() {
    this.enableEditIndex = null;
  }

  saveRowData(rowData) {
    this.enableEditIndex = null;
    console.log('rowData', rowData);
    this.restService.saveLead(rowData).subscribe(reponse => {
      console.log('reponse', reponse);
    }, error => {
      console.log('error', error);
    });
  }

  delteItem(id: number) {
    if (confirm('Confirm Lead deletion?')) {
      // delete and load grid
      this.searchLeads();
    }
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

  private loadLeadOwners() {
    this.restService.getLeadOwners().subscribe(leadOwners => {
      this.leadOwners = leadOwners;
    });
  }

  private doSearch(searchModel: SearchModel) {
    let pageableModel: PageableModel<Lead> = new PageableModel();
    pageableModel.page = this.page - 1;
    pageableModel.size = this.pageSize;
    pageableModel.request = searchModel;
    this.restService.searchLeads(pageableModel).subscribe(page => {
      this.leads = page.result;
      this.recordsPerPage = this.leads.length;
      this.totalRecords = page.total;
    });
  }
}
