import { Component, OnInit } from '@angular/core';
import {StatusService} from "../../share/services/status.service";
import { Status } from "../../share/interface/status";

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  public arrayStatus: Status[];

  constructor(
    private statusService: StatusService
  ) { }

  ngOnInit(): void {
    this.get();
  }

  get(){
    return this.statusService.get().subscribe( (result: Status[]) => {
      this.arrayStatus = result;
    });
  }

}
