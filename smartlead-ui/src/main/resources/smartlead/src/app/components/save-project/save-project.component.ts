import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { ProjectType } from 'src/app/models/project-type';
import { ProjectStage } from 'src/app/models/project-stage';
import { Builder } from 'src/app/models/builder';
import { Amenity } from 'src/app/models/amenity';
import { RestService } from 'src/app/services/rest.service';
import { Project } from 'src/app/models/project';
import { EnumAlertType } from 'src/app/models/enum-alert-type';
import { Alert } from 'src/app/models/alert';
import * as fileSaver from 'file-saver';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-save-project',
  templateUrl: './save-project.component.html',
  styleUrls: ['./save-project.component.css']
})
export class SaveProjectComponent implements OnInit {

  saveProjectForm: FormGroup;
  loading: boolean = false;
  alert: Alert;
  projectTypes: ProjectType[];
  projectStages: ProjectStage[];
  builders: Builder[];
  amenities: Amenity[];
  projectId: number;
  titleAndButtonText = 'Add Project';
  attachment: File;
  brochureName: string;
  loggedInUser: User;

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private restService: RestService,
    private authenticationService: AuthenticationService) {
    this.saveProjectForm = this.formBuilder.group({
      projectName: '',
      projectType: '',
      projectStage: '',
      projectLocation: '',
      builder: '',
      towers: '',
      wings: '',
      blocks: '',
      floors: '',
      units: '',
      amenities: new FormArray([]),
      description: '',
      attachment: ''
    });
    this.alert = new Alert();
  }

  ngOnInit() {
    this.loadProjectTypes();
    this.loadProjectStages();
    this.loadBuilders();
    this.loadAmenities();
    if (this.projectId) {
      this.titleAndButtonText = 'Save Project';
      this.fetchProject(this.projectId);
    }
    this.loggedInUser = this.authenticationService.getUser();
  }

  onFileChange(event) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.attachment = file;
    }
  }

  getAmenitiesControls() {
    return (this.saveProjectForm.get('amenities') as FormArray).controls;
  }

  saveProject(formData) {
    const selectedAmenities = this.saveProjectForm.value.amenities
      .map((v, i) => v ? this.amenities[i] : null)
      .filter(v => v !== null);
    let project: Project = new Project();
    Object.assign(project, formData);
    project.amenities = selectedAmenities;

    if (this.projectId) {
      project.projectId = this.projectId;
      project.modifiedBy = this.loggedInUser.username;
      this.restService.saveProject(project, this.attachment).subscribe(response => {
        if (response.brochureName) {
          this.brochureName = response.brochureName;
        }
        this.setAlert('Project updated successfully', EnumAlertType.Success);
      }, error => {
        console.error(error);
        this.setAlert('Server side error in saving project', EnumAlertType.Error);
      });
    } else {
      project.createdBy = this.loggedInUser.username;
      project.modifiedBy = this.loggedInUser.username;
      this.restService.addProject(project, this.attachment).subscribe(response => {
        this.setAlert('Project added successfully with id: ' + response.projectId, EnumAlertType.Success);
        this.saveProjectForm.reset();
      }, error => {
        console.error(error);
        this.setAlert('Server side error in adding project', EnumAlertType.Error);
      });
    }
  }

  downLoadBrochure() {
    event.preventDefault();
    this.restService.downLoadBrochure(this.projectId).subscribe(response => {
      const blob = new Blob([response]);
      fileSaver.saveAs(blob, this.brochureName);
    });
  }

  private fetchProject(id: number) {
    this.restService.fetchProject(id).subscribe(project => {
      if (!project) {
        alert('Error: Project with id: ' + id + ' was not found');
        this.activeModal.dismiss();
      }
      this.saveProjectForm.patchValue({
        projectName: project.projectName,
        projectType: project.projectType,
        projectStage: project.projectStage,
        projectLocation: project.projectLocation,
        builder: project.builder,
        towers: project.towers,
        wings: project.wings,
        blocks: project.blocks,
        floors: project.floors,
        units: project.units,
        description: project.description,
      });
      this.brochureName = project.brochureName;
      this.patchAmenities(project.amenities);
      console.log(project);
    });
  }

  private patchAmenities(savedAmenities: Amenity[]) {
    let that = this;
    for (let i = 0; i < that.amenities.length; i++) {
      if (savedAmenities.filter(function (e) { return e.amenityId === that.amenities[i].amenityId; }).length > 0) {
        (this.saveProjectForm.controls.amenities as FormArray).controls[i].patchValue(true);
      } else {
        (this.saveProjectForm.controls.amenities as FormArray).controls[i].patchValue(false);
      }
    }
  }

  private loadProjectTypes() {
    this.restService.getProjectTypes().subscribe(projectTypes => {
      this.projectTypes = projectTypes;
    });
  }

  private loadProjectStages() {
    this.restService.getProjectStages().subscribe(projectStages => {
      this.projectStages = projectStages;
    });
  }

  private loadBuilders() {
    this.restService.getBuilders().subscribe(builders => {
      this.builders = builders;
    });
  }

  private loadAmenities() {
    this.restService.getAmenities().subscribe(amenities => {
      this.amenities = amenities;
      this.amenities.forEach(e => {
        const control = new FormControl(false);
        (this.saveProjectForm.controls.amenities as FormArray).push(control);
      });
    });
  }

  private setAlert(message: string, type: EnumAlertType) {
    this.alert.message = message;
    this.alert.type = type;
  }

}
