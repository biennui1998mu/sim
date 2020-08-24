import {Injectable} from '@angular/core';
import {User} from '../interface/user';
import {HttpClient} from '@angular/common/http';
import {APIResponse} from '../interface/API-response';
import {apiRoute} from '../api';
import {catchError, map, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {TokenService} from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = apiRoute('user');

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {
  }

  getAllUser(): Observable<User[]> {
    return this.http.post<APIResponse>(`${this.url}/`, [], {headers: this.tokenService.authorizeHeader}).pipe(
      map(result => {
        console.log(result);
        if (!result) {
          return [];
        }
        return result.data;
      }),
      catchError(error => of(null)));
  }

  login(credential: {
    username: string;
    password: string
  }) {
    return this.http.post<APIResponse<{ token: string, user: User }>>(`${this.url}/login`, credential).pipe(
      map(result => {
        if (result.data && result.data.token && result.data.user) {
          /**
           * save token of user in headers
           */
          this.tokenService.token = result.data.token;
          return true;
        }
        return false;
      }), catchError(error => {
        return of(false);
      }));
  }

  get(id: string) {
    return this.http.post<APIResponse<User>>(
      `${this.url}/view`, {_id: id},
      {headers: this.tokenService.authorizeHeader}
    ).pipe(
      map(result => {
        if (!result) {
          return null;
        }
        return result.data;
      }), catchError(error => {
        return null;
      })
    );
  }
}

