import { Component, OnInit } from '@angular/core';
import {StatusService} from "../../services/status.service";

@Component({
  selector: 'app-status-form',
  templateUrl: './status-form.component.html',
  styleUrls: ['./status-form.component.scss']
})
export class StatusFormComponent implements OnInit {

  constructor(
    private statusService: StatusService,
  ) { }

  ngOnInit(): void {
  }

  create(){
    this.statusService.create()
  }
}
