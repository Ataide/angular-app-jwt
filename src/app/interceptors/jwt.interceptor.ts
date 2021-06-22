import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,  
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {   
    let loggedUser = this.authService.loggedUserValue;
        if (loggedUser && loggedUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + loggedUser.token
                }
            });
        }        
    return next.handle(request)
  }
}
