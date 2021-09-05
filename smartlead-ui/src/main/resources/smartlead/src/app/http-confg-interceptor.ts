import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthenticationService } from './services/authentication.service';

@Injectable({
    providedIn: 'root'
})
export class HttpConfigInterceptor implements HttpInterceptor {

    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = this.authenticationService.getToken();
        if (token && this.sendTokenInRequest(request.url)) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    if (this.isLoginRequest(event.url)) {
                        const token = event.headers.get('Authorization');
                        if (token) {
                            this.authenticationService.setToken(token);
                        }
                    }
                }
                return event;
            }), catchError(err => {
                if (err.status && err.status === 403) {
                    this.authenticationService.forceLogout();
                }
                //const error = err.error.message || err.statusText;
                return throwError(err);
            })
        );
    }

    private isLoginRequest(url: string) {
        return (url.substr(url.lastIndexOf('/')) === '/login');
    }

    private sendTokenInRequest(url: string) {
        return !(url.substr(url.lastIndexOf('/')) === '/login' || url.substr(url.lastIndexOf('/')) === '/organizations');
    }
}