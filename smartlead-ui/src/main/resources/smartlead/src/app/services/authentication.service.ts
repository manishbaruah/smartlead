import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router: Router, private ngbModal: NgbModal) { }

  getToken(): string {
    const token = localStorage.getItem('token');
    return token;
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

  setUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout() {
    this.doLogout(false);
  }

  forceLogout() {
    this.doLogout(true);
  }

  private doLogout(forceLogout: boolean) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    let state: any;
    if (forceLogout) {
      state = {
        message: 'User is logged out of the application due to session expiry'
      }
    }
    this.ngbModal.dismissAll();
    this.router.navigate(['/login'], { state: state });
  }
}
