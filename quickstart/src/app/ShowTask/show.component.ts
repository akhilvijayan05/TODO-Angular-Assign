import {Component} from '@angular/core';
import {AppService} from "../app.service";
import {Task} from "../app.task";
import {Router} from "@angular/router";

@Component({
  selector: '',
  template: `<h1>These are your tasks</h1>
<p *ngFor="let detail of details"><label>Date:</label>{{detail.date}}<br><label>Title:</label>{{detail.title}}<br><label>Description:</label>{{detail.description}}<br><label>Priority:</label>{{detail.priority}}<br><input type="button" value="Edit" (click)=edit(detail)> <input type="button" value="Done" (click)=done(detail)><br></p>
`,
})
export class ShowComponent {
  details: Task[];
  date = "";

  constructor(private router: Router) { }
  public ngOnInit(): any {
    this.details = AppService.details;
  }

  edit(detail: Task) {
    let storeage=new AppService;
    AppService.details.splice(this.details.indexOf(detail), 1);
    storeage.store(detail);
    this.router.navigate(['create']);
  }

  done(detail: Task) {
    AppService.details.splice(this.details.indexOf(detail), 1);
    this.details = AppService.details;
  }
}
