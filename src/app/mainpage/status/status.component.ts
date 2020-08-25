import {Component, OnInit} from "@angular/core";
import {StatusService} from "../../share/services/status.service";
import {Status} from "../../share/interface/status";

@Component({
  selector: "app-status",
  templateUrl: "./status.component.html",
  styleUrls: ["./status.component.scss"]
})
export class StatusComponent implements OnInit {

  arrayStatus: Status[] = [];

  constructor(
    private statusService: StatusService
  ) {
    this.statusService.statusPost.subscribe(listStatus => {
      this.arrayStatus = listStatus;
    });
  }

  ngOnInit(): void {
    this.statusService.get();
  }
}
