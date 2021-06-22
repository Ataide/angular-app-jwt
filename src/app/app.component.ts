import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end-angular';
  loggedUser!: User;

  constructor(
    private router: Router,
    private authService: AuthService
  ){
    this.authService.loggedUser.subscribe(u => this.loggedUser = u);
  }

  public logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);

  }
}
