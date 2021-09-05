import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/user';
import { Alert } from 'src/app/models/alert';
import { EnumAlertType } from 'src/app/models/enum-alert-type';
import { RestService } from 'src/app/services/rest.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userProfileForm: FormGroup;
  loading: boolean = false;
  alert: Alert;
  userData: User;

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private restService: RestService,
    private authenticationService: AuthenticationService) {
    this.userProfileForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      mobile: '',
      password: '',
      cpassword: ''
    });
    this.alert = new Alert();
  }

  ngOnInit() {
    this.loadUserData();
  }

  onSubmit(formData: any) {
    let isValid = this.validateFormData(formData);
    if (!isValid) {
      return;
    }
    let user: User = formData;
    user.userId = this.userData.userId;
    this.restService.saveUserDetails(user).subscribe(user => {
      this.authenticationService.setUser(user);
      this.setAlert('User details updated successfully', EnumAlertType.Success);
    }, error => {
      this.setAlert(error.message, EnumAlertType.Error);
      this.loading = false;
    });
  }

  private loadUserData() {
    this.userData = this.authenticationService.getUser();
    this.userProfileForm.get('firstName').setValue(this.userData.firstName);
    this.userProfileForm.get('lastName').setValue(this.userData.lastName);
    this.userProfileForm.get('mobile').setValue(this.userData.mobile);
    this.userProfileForm.get('password').setValue('');
    this.userProfileForm.get('cpassword').setValue('');
  }

  private validateFormData(formData: any): boolean {
    this.alert.message = null;
    if (formData.password || formData.cpassword) {
      if (formData.password !== formData.cpassword) {
        this.setAlert('Passwords do not match', EnumAlertType.Error);
      }
    }

    if (this.alert.message) {
      return false;
    }
    return true;
  }

  private setAlert(message: string, type: EnumAlertType) {
    this.alert.message = message;
    this.alert.type = type;
  }

}
