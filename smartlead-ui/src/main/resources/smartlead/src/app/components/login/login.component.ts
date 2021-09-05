import { Component, OnInit } from '@angular/core';
import { Organization } from 'src/app/models/organization';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { EnumAlertType } from 'src/app/models/enum-alert-type';
import { Alert } from 'src/app/models/alert';
import { LoginRequest } from 'src/app/models/login-request';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  organizations: Organization[];
  loginForm: FormGroup;
  loading: boolean = false;
  alert: Alert;

  constructor(private formBuilder: FormBuilder, private router: Router, private authenticationService: AuthenticationService,
    private restService: RestService) {
    if (authenticationService.isLoggedIn()) {
      this.router.navigate(['dashboard']);
    }


    this.loginForm = this.formBuilder.group({
      organization: '',
      username: '',
      password: ''
    });
    this.alert = new Alert();

    let navState = this.router.getCurrentNavigation().extras.state;
    if (navState) {
      this.setAlert(navState.message, EnumAlertType.Error);
    }
  }

  ngOnInit() {
    this.loadOrganizations();
  }

  onSubmit(formData) {
    let loginRequest = formData as LoginRequest;
    this.loading = true;
    this.login(loginRequest);
  }

  private login(loginRequest: LoginRequest) {
    this.restService.login(loginRequest).subscribe(user => {
      this.authenticationService.setUser(user);
      this.router.navigate(['dashboard']);
    }, error => {
      this.setAlert(error, EnumAlertType.Error);
      this.loading = false;
    });
  }

  private loadOrganizations() {
    this.restService.getOrganizations().subscribe(organizations => {
      this.organizations = organizations;
    });
  }

  private setAlert(message: string, type: EnumAlertType) {
    this.alert.message = message;
    this.alert.type = type;
  }
}
