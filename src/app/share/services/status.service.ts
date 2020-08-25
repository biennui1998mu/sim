import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {apiRoute} from "../api/index";
import {TokenService} from "./token.service";
import {catchError, map} from "rxjs/operators";
import {APIResponse} from "../interface/API-response";
import {BehaviorSubject, of} from "rxjs";
import {Status} from "../interface/status";

@Injectable({
  providedIn: "root"
})
export class StatusService {

  /**
   *
   * @private
   */
  // Behavior can 1 gia tri init (state dau tien cua no)
  // neu cai behavior nay cua m chua danh sach cac status thi no nen la array
  private _statusPost = new BehaviorSubject<Status[]>([
    // empty array
  ]);
  // cac component/service khac se su dung bien public nay de lay du lieu tu state
  public statusPost = this._statusPost.asObservable();

  private url = apiRoute("status");

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {
  }

  get() {
    this.http.post<APIResponse<Status[]>>(
      `${this.url}/`,
      {},
      {
        headers: this.tokenService.authorizeHeader
      }).pipe(
      map(result => {
        if (result?.data) {
          return result.data;
        }
        return null as Status[];
      }), catchError(error => {
        return of(null as Status[]);
      })
    ).subscribe(newData => {
      if (newData) {
        this._statusPost.next(newData);
      } else {
        // neu error thi reset state
        this._statusPost.next([]);
      }
    });
  }

  create(credential: {
    content: string,
    tagPeople: string,
    tagGroup: string,
    file: string
  }) {
    return this.http.post<APIResponse<Status>>(
      `${this.url}/create`,
      credential,
      {headers: this.tokenService.authorizeHeader}
    ).pipe(
      map((result) => {
        if (result.data) {
          // minh se lay luon status moi tao va update no vao state luon,
          // thay vi phai query lai
          const currentState = this._statusPost.getValue();
          currentState.unshift(result.data);
          this._statusPost.next(currentState);
          return true;
        }
        return false;
      })
    );
  }
}
