import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        // height: '200px',
        // opacity: 1,
        // backgroundColor: 'yellow'
      })),
      state('closed', style({
        // height: '100px',
        // opacity: 0.5,
        // backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class LoginComponent implements OnInit {

  signIn = true;
  signUp = false;

  constructor() { }

  ngOnInit(): void {
  }

  signin(){
    this.signIn = true;
    this.signUp = false;
  }

  signup(){
    this.signIn = false;
    this.signUp = true;
  }

}
