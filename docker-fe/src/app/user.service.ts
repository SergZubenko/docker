import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<string[]> {
    return this.http.get<string[]>('/services/users');
  }
}
