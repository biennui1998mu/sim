import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {InboxComponent} from '../inbox/inbox.component';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog(){
      const dialogRef = this.dialog.open(InboxComponent, {
        width: '280px',
        height: `350px`,
        position: {
          bottom: `0.5rem`,
          left: `${230 + 16}px`,
        },
        hasBackdrop: false,
        panelClass: `setting-modal-box`,
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
  }
}
