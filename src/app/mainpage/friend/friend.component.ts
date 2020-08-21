import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {InboxComponent} from '../../share/inbox/inbox.component';
import {User} from "../../share/interface/user";
import {UserService} from "../../share/services/user.service";

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit {

  user: User[];

  constructor(
    public dialog: MatDialog,
    public userService: UserService
  ) {
  }

  getUser() {
    this.userService.getAllUser().subscribe( (result) => {
      this.user = result;
    });
  }

  ngOnInit(): void {
    this.getUser();
  }

  openDialog(){
      const dialogRef = this.dialog.open(InboxComponent, {
        width: '17.5rem',
        height: `22rem`,
        position: {
          bottom: `0.5rem`,
          right: `16rem`,
        },
        hasBackdrop: true,
      });
      dialogRef.afterClosed().subscribe(result => {
      });
  }
}

