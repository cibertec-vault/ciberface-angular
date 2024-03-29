import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Like } from '../schema/like';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  url = `${environment.baseUrl}/api/like`;

  constructor(private http: HttpClient) { }

  add = (like: Like) => {
    return this.http.post<Like>(`${this.url}`, like)
  }
}
