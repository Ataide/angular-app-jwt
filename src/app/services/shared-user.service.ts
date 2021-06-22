import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../users/users.component';

@Injectable()
export class SharedUserService {

  private user!: User;

  set userToEdit(user) {
    this.user = user;
  }

  get userToEdit() {
    return this.user;
  }

}