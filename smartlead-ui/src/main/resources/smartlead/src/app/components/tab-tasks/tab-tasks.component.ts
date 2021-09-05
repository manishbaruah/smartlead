import { Component, OnInit, Input } from '@angular/core';
import { TaskInterval } from 'src/app/models/task-interval';
import { RestService } from 'src/app/services/rest.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from 'src/app/models/task';
import { SaveTaskComponent } from '../save-task/save-task.component';
import { Lead } from 'src/app/models/lead';
import { EnumTaskStatus } from 'src/app/models/enum-task-status';

@Component({
  selector: 'app-tab-tasks',
  templateUrl: './tab-tasks.component.html',
  styleUrls: ['./tab-tasks.component.css']
})
export class TabTasksComponent implements OnInit {

  @Input() lead: Lead;
  taskIntervals: TaskInterval[];
  showItems: boolean = false;
  showItemsIndex = null;

  constructor(private ngbModal: NgbModal, private restService: RestService) { }

  ngOnInit() {
    this.getTasks(this.lead.leadId, '');
  }

  filterTasks(event) {
    const status = event.target.value;
    console.log(status);
    this.getTasks(this.lead.leadId, status);
  }

  onMouseover(index) {
    this.showItems = true;
    this.showItemsIndex = index;
  }

  onMouseout(index) {
    this.showItems = false;
    this.showItemsIndex = index;
  }

  getBorderStyle(status: string): string {
    let style = '6px solid ';
    if (status == EnumTaskStatus.Pending) {
      style += '#4caf50';
    } else if (status == EnumTaskStatus.Overdue) {
      style += '#f4511e';
    } else if (status == EnumTaskStatus.Completed) {
      style += '#9e9e9e';
    }
    return style;
  }

  editItem(leadTask: Task) {
    const modalRef = this.ngbModal.open(SaveTaskComponent, { size: 'lg', backdrop: 'static' });
    const component = modalRef.componentInstance as SaveTaskComponent;
    component.task = leadTask;
    component.taskType = leadTask.taskType;
    component.lead = this.lead;

    modalRef.result.then((data) => {
      this.getTasks(this.lead.leadId, '');
    }, (reason) => {
      this.getTasks(this.lead.leadId, '');
    });
  }

  delteItem(leadTaskId: number) {
    if (confirm('Confirm Task deletion?')) {
      this.restService.deleteLeadTask(this.lead.leadId, leadTaskId).subscribe(response => {
        console.log(response);
        this.getTasks(this.lead.leadId, '');
      }, error => {
        console.log(error);
      });
    }
  }

  private getTasks(leadId: number, status: string) {
    this.taskIntervals = [];

    this.restService.getLeadTasks(leadId, status).subscribe(tasks => {
      let intervalToday: TaskInterval = new TaskInterval();
      intervalToday.interval = 'Today';
      intervalToday.tasks = [];

      let intervalOlder: TaskInterval = new TaskInterval();
      intervalOlder.interval = 'Older';
      intervalOlder.tasks = [];

      tasks.forEach(task => {
        if (this.isToday(task.createdOn)) {
          intervalToday.tasks.push(task);
        } else {
          intervalOlder.tasks.push(task);
        }
      });
      if (intervalToday.tasks.length > 0) {
        this.taskIntervals.push(intervalToday);
      }
      if (intervalOlder.tasks.length > 0) {
        this.taskIntervals.push(intervalOlder);
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
