import { Component, OnInit } from '@angular/core';
import { BusinessOverview } from 'src/app/models/business-overview';
import { TaskSummary } from 'src/app/models/task-summary';
import { RestService } from 'src/app/services/rest.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-dash-admin',
  templateUrl: './dash-admin.component.html',
  styleUrls: ['./dash-admin.component.css']
})
export class DashAdminComponent implements OnInit {

  businessOverview: BusinessOverview;
  teamTaskSummaryList: TaskSummary[];

  overviewInterval = 'daily';
  summaryInterval = 'today';

  constructor(private restService: RestService) { }

  ngOnInit() {
    this.loadBusinessOverview(null);
    this.loadTeamTaskSummary(null);
  }

  loadBusinessOverview(interval: string) {
    if (event) {
      event.preventDefault();
    }
    if (interval) {
      this.overviewInterval = interval;
    } else {
      interval = this.overviewInterval;
    }
    this.restService.getBusinessOverviewForAdmin(interval).subscribe(businessOverview => {
      this.businessOverview = businessOverview;
    });
  }

  loadTeamTaskSummary(interval: string) {
    if (event) {
      event.preventDefault();
    }
    if (interval) {
      this.summaryInterval = interval;
    } else {
      interval = this.summaryInterval;
    }

    this.restService.getAllEmployees().subscribe(userList => {
      this.restService.getTaskSummaryForAdmin(userList, interval).subscribe(teamTaskSummaryList => {
        this.teamTaskSummaryList = teamTaskSummaryList;
      });
    });
  }
}
