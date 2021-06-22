import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = "http://127.0.0.1:8080";

  constructor(
    private httpClient: HttpClient,

  ) { }

  public findAll() {
    return this.httpClient.get(this.baseUrl + '/users').pipe(map( result => {
      return result;
    }))
  }

  public update(id: number, name: string, email: string, password: string) {
    return this.httpClient.put(this.baseUrl + `/users `, {id, name, email,password}).pipe(map( result => {
      return result;
    }))
  }

  public delete(id:number) {
    return this.httpClient.delete(this.baseUrl + `/users/${id}`).pipe(map( result => {
      return result;
    }))
  }
}
