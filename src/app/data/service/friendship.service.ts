import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Friendship } from '../schema/friendship';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FriendshipService {
  url = `${environment.baseUrl}/api/friendship`;

  constructor(private http: HttpClient) { }

  add = (friendship: Friendship) => {
    return this.http.post<Number>(`${this.url}`, friendship)
  }

  getByFriendAndUserIds = (userId: number, friendId: number) => {
    return this.http.get<Friendship>(`${this.url}/get-by-user-friend-id`, {
      params: {
        "userId": userId,
        "friendId": friendId
      }
    })
  }
}
