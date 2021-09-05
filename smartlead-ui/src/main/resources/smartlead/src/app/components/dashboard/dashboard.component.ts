import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  isAdmin: boolean;

  constructor(private authenticationService: AuthenticationService) {
    const loggedInUser = this.authenticationService.getUser();
    if (loggedInUser.roles.includes('Admin')) {
      this.isAdmin = true;
    }
  }
}
