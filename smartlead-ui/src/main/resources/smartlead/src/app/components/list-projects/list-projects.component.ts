import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Project } from 'src/app/models/project';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SaveProjectComponent } from '../save-project/save-project.component';
import { SearchModel } from 'src/app/models/search-model';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css']
})
export class ListProjectsComponent implements OnInit {

  searchForm: FormGroup;
  loading: boolean = false;
  projects: Project[];

  constructor(private formBuilder: FormBuilder, private ngbModal: NgbModal, private restService: RestService) {
    this.searchForm = this.formBuilder.group({
      searchText: ''
    });
  }

  ngOnInit() {
    this.searchProjects();
  }

  searchProjects() {
    let searchModel: SearchModel = new SearchModel();
    searchModel.searchTerm = this.searchForm.get('searchText').value;
    this.restService.searchProjects(searchModel).subscribe(projects => {
      this.projects = projects;
    });
  }

  editItem(id: number) {
    const modalRef = this.ngbModal.open(SaveProjectComponent, { size: 'xl', backdrop: 'static' });
    (modalRef.componentInstance as SaveProjectComponent).projectId = id;
    modalRef.result.then((data) => {
      this.searchProjects();
    }, (reason) => {
      this.searchProjects();
    });
  }

  delteItem(id: number) {
    if (confirm('Confirm Project deletion?')) {
      this.restService.deleteProject(id).subscribe(response => {
        console.log(response);
        this.searchProjects();
      });
    }
  }
}
