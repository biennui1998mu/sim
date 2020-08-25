import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  backgroundImageUrl = 'https://images.pexels.com/photos/853199/pexels-photo-853199.jpeg?cs=srgb&dl=pexels-artem-beliaikin-853199.jpg&fm=jpg';

  public form = {
    username: null,
    password: null
  };

  constructor(
    private user: UserService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  bgrImageUrl(){
    return `url(${this.backgroundImageUrl})`;
  }

  logIn(){
    return this.user.login(this.form).subscribe( check => {
      if (check){
        return this.router.navigateByUrl('/homepage');
      }
      return this.snackBar.open('some error !!!', 'input again', {
        duration: 2000
      });
    });
  }
}
