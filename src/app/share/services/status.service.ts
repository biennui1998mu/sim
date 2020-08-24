import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {apiRoute} from '../api/index';
import {TokenService} from "./token.service";
import {catchError, map} from "rxjs/operators";
import {APIResponse} from "../interface/API-response";

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private url = apiRoute('status');

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {
  }

  get() {
    return this.http.post<APIResponse>(
      `${this.url}/`,
      {},
      {
        headers: this.tokenService.authorizeHeader
      }).pipe(
      map(result => {
        if (result) {
          return result.data;
        }
        return null;
      }), catchError(error => {
        return null;
      })
    );
  }

  create(credential: {
    content: string,
    tagPeople: string,
    tagGroup: string,
    file: string
  }) {
    return this.http.post<APIResponse>(
      `${this.url}/create`,
      {credential},
      {headers: this.tokenService.authorizeHeader}
    ).pipe(
      map ( result => {
        console.log(result);
      })
    );
  }
}
