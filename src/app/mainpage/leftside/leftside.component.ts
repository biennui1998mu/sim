import {Component, OnInit} from '@angular/core';
import {UserService} from "../../share/services/user.service";
import {User} from "../../share/interface/user";

@Component({
  selector: 'app-leftside',
  templateUrl: './leftside.component.html',
  styleUrls: ['./leftside.component.scss']
})
export class LeftsideComponent implements OnInit {

  panelOpenState = false;

  public self: User = null;

  constructor(
    private user: UserService,
  ) {
    this.get();
  }

  ngOnInit(): void {
  }

  get() {
    return this.user.get().subscribe((result: User) => {
      console.log(result);
      this.self = result;
    });
  }

}
