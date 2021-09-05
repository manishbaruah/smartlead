import { Component, OnInit } from '@angular/core';
import { TaskSummary } from 'src/app/models/task-summary';
import { RestService } from 'src/app/services/rest.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-dash-user',
  templateUrl: './dash-user.component.html',
  styleUrls: ['./dash-user.component.css']
})
export class DashUserComponent implements OnInit {

  taskSummary: TaskSummary;
  summaryInterval = 'today';

  constructor(private restService: RestService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.loadTaskSummary(null);
  }

  loadTaskSummary(interval: string) {
    if (event) {
      event.preventDefault();
    }
    if (interval) {
      this.summaryInterval = interval;
    } else {
      interval = this.summaryInterval;
    }

    this.restService.getTaskSummaryForUser(this.authenticationService.getUser().userId, interval).subscribe(taskSummary => {
      this.taskSummary = taskSummary;
    });
  }
}
