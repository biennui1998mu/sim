import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {InboxComponent} from '../../share/component/inbox/inbox.component';
import {User} from "../../share/interface/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit {

  @Input() public friend: User[];

  constructor(
    public dialog: MatDialog,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  // openDialog() {
  //   const dialogRef = this.dialog.open(InboxComponent, {
  //     width: '17.5rem',
  //     height: `22rem`,
  //     position: {
  //       bottom: `0.5rem`,
  //       right: `16rem`,
  //     },
  //     hasBackdrop: true,
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //   });
  // }

  openProfile(id){
    return this.router.navigate(['profile', id]);
  }
}

