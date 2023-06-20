import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Friendship } from '../schema/friendship';

@Injectable({
  providedIn: 'root'
})
export class FriendshipService {
  url = 'http://localhost:8080/api/friendship';

  constructor(private http: HttpClient) { }

  add = (friendship: Friendship) => {
    return this.http.post<Number>(`${this.url}/`, friendship)
  }
}
