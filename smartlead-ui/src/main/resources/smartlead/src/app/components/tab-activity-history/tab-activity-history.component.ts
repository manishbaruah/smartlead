import { Component, OnInit, Input } from '@angular/core';
import { ActivityInterval } from 'src/app/models/activity-interval';
import { Activity } from 'src/app/models/activity';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-tab-activity-history',
  templateUrl: './tab-activity-history.component.html',
  styleUrls: ['./tab-activity-history.component.css']
})
export class TabActivityHistoryComponent implements OnInit {

  @Input() leadId: number;

  activityIntervals: ActivityInterval[];

  constructor(private restService: RestService) { }

  ngOnInit() {
    this.fetchActivityHistory(this.leadId);
  }

  private fetchActivityHistory(leadId: number) {
    this.activityIntervals = [];

    this.restService.getLeadActivities(leadId).subscribe(activities => {
      let intervalToday: ActivityInterval = new ActivityInterval();
      intervalToday.interval = 'Today';
      intervalToday.activities = [];

      let intervalOlder: ActivityInterval = new ActivityInterval();
      intervalOlder.interval = 'Older';
      intervalOlder.activities = [];

      activities.forEach(activity => {
        if (this.isToday(activity.createdOn)) {
          intervalToday.activities.push(activity);
        } else {
          intervalOlder.activities.push(activity);
        }
      });
      if (intervalToday.activities.length > 0) {
        this.activityIntervals.push(intervalToday);
      }
      if (intervalOlder.activities.length > 0) {
        this.activityIntervals.push(intervalOlder);
      }
    }, error => {
      console.error(error);
    });
  }

  private isToday(createdOn: string): boolean {
    let createdDate = new Date(Date.parse(createdOn));
    let today = new Date();
    return createdDate.getDate() == today.getDate() &&
      createdDate.getMonth() == today.getMonth() &&
      createdDate.getFullYear() == today.getFullYear();
  }
}
