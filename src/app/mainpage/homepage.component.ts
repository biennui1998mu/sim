import {Component, OnInit} from '@angular/core';
import {UserService} from "../share/services/user.service";
import {User} from "../share/interface/user";


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {

  public user: User[];

  now = new Date();

  constructor(
    public userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userService.getAllUser().subscribe( (result) => {
      this.user = result;
    });
  }

}
