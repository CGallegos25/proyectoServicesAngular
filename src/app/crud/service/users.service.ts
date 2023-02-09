import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { environment } from 'src/environments/environment';
import { PostUser } from '../interface/post-user';
import { User } from '../interface/user';
import { UserPost } from '../interface/user-post';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  // Logica son las llamadas al API y los metodos GET, POST, PUT, DELETE, PATCH

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.pathAPICrud}users`);
  }

  getUserById(id: number): Observable<PostUser> {
    return this.http.get<PostUser>(`${environment.pathAPICrud}posts/${id}`);
  }

  postUser(user: UserPost): Observable<PostUser> {
    return this.http.post<PostUser>(`${environment.pathAPICrud}posts`, user);
  }

  patchUser(user: PostUser): Observable<PostUser> {
    return this.http.put<PostUser>(`${environment.pathAPICrud}posts/${user.id}`, user);
  }

  deleteUser(idUser: number): Observable<void> {
    return this.http.delete<void>(`${environment.pathAPICrud}posts/${idUser}`);
  }
}
