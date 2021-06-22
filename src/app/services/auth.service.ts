import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';  

export interface User {
  id:     string;
  name:   string;
  token:  string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = "http://127.0.0.1:8080";
  private loggedUserSubject: BehaviorSubject<any>;
  public loggedUser: Observable<User>;

  constructor(private httpClient: HttpClient) { 
    this.loggedUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('loggedUser')!));
    this.loggedUser = this.loggedUserSubject.asObservable();
  }

  public get loggedUserValue(): User {
    return this.loggedUserSubject.value;
  }

  login(email:string, password:string) {
    return this.httpClient.post<User>(this.baseUrl + '/login', {email, password})
    .pipe(map(user => {
      localStorage.setItem('loggedUser', JSON.stringify(user));   
      this.loggedUserSubject.next(user);
      return user; 
    }))
  }
  register(name:string, email:string, password:string){
    return this.httpClient.post(this.baseUrl + '/register', { name, email, password })
    .pipe(map(res => {
      console.log(res)
    }))
  }
  logout() {
    localStorage.removeItem('loggedUser');
    this.loggedUserSubject.next(null);
}
}

