import {Component, OnInit} from '@angular/core';
import {StatusService} from "../../services/status.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-status-form',
  templateUrl: './status-form.component.html',
  styleUrls: ['./status-form.component.scss']
})
export class StatusFormComponent implements OnInit {

  public statusPost = {
    content: null,
    tagPeople: null,
    tagGroup: null,
    file: null
  };

  constructor(
    private statusService: StatusService,
    private dialogRef: MatDialogRef<StatusFormComponent>
    ) {
  }

  ngOnInit(): void {
  }

  create() {
    this.statusService.create(this.statusPost).subscribe(success => {
      if (success) {
        return this.dialogRef.close();
      }
    });
  }
}
