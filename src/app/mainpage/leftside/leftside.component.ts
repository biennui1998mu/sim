import {Component, OnInit} from '@angular/core';
import {UserService} from "../../share/services/user.service";
import {User} from "../../share/interface/user";
import {TokenService} from "../../share/services/token.service";

@Component({
  selector: 'app-leftside',
  templateUrl: './leftside.component.html',
  styleUrls: ['./leftside.component.scss']
})
export class LeftsideComponent implements OnInit {

  panelOpenState = false;

  public self: User = null;

  constructor(
    private userService: UserService,
    private tokenService: TokenService
  ) {
    this.get();
  }

  ngOnInit(): void {
  }

  get() {
    const tokenDecoded = this.tokenService.decodedToken;
    console.log(tokenDecoded);
    return this.userService.get(tokenDecoded._id).subscribe((result: User) => {
      console.log(result);
      this.self = result;
    });
  }

}
