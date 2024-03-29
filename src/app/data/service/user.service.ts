import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetBasicUserInformation } from '../schema/getbasicuserinformation';
import { User } from '../schema/user';
import { ChangePassword } from '../schema/changepassword';
import { EditUserInformation } from '../schema/edituserinformation';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = `${environment.baseUrl}/api/user`;

  constructor(private http: HttpClient) { }

  getBasicUserInformation = (userId: number) => {
    return this.http.get<GetBasicUserInformation>(`${this.url}/${userId}/get-basic-information`)
  }

  getNoFriendsByUser = (userId: number) => {
    return this.http.get<User[]>(`${this.url}/${userId}/get-no-friends`)
  }

  getFriendsByUser = (userId: number) => {
    return this.http.get<User[]>(`${this.url}/${userId}/get-friends`)
  }

  editUserInformation(userId: number, editUser: any) {
    return this.http.put<EditUserInformation>(`${this.url}/${userId}/edit-user-information`, editUser);
  }

  changePassword(userId: number, password: ChangePassword) {
    return this.http.put<ChangePassword>(`${this.url}/${userId}/change-password`, password);
  }
}
