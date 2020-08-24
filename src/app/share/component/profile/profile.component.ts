import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";
import {User} from "../../interface/user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  id: string = null;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.idUser();
    this.get();
  }

  idUser() {
    const userId = this.route.snapshot.paramMap.get('id');
    return this.id = userId;
  }

  get(){
    return this.userService.get(this.id).subscribe((result: User) => {
      console.log(result);
      this.user = result;
    });
  }
}
