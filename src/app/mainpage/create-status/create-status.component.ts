import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {StatusFormComponent} from "../../share/component/status-form/status-form.component";

@Component({
  selector: 'app-create-status',
  templateUrl: './create-status.component.html',
  styleUrls: ['./create-status.component.scss']
})
export class CreateStatusComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog(){
    const dialogRef = this.dialog.open(StatusFormComponent, {
      hasBackdrop: true,
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
