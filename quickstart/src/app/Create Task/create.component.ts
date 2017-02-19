import {Component} from '@angular/core';
import {AppService} from "../app.service";
import {Task} from "../app.task";

@Component({
  selector: '',
  template: `<h1>Create your Task</h1><br>
<form (ngSubmit)="submit(date.value,title.value,description.value,priority.value)">
  <label>Date: </label><input type="text" class="form-control" value="{{data.date}}" #date>
  <label>Title: </label><input type="text" class="form-control" #title value="{{data.title}}">
  <label>Description: </label><input type="text" class="form-control" #description value="{{data.description}}">
  <label>Priority: </label><br><select #priority   >
  <option value="high">High</option>
  <option value="medium">Medium</option>
  <option value="low">Low</option>
</select><br><br>
  <button type="submit">Submit</button>
</form>`,
  providers: [AppService]
})
export class CreateComponent {
  details: Task[];
  data: Task;
  constructor(private service: AppService) {
    this.details = AppService.details;
  }

  submit(date: string, title: string, description: string, priority: string) {
    let service = new AppService()
    let task = new Task()
    task.date = date;
    task.title = title;
    task.description = description;
    task.priority = priority;
    service.setDetails(task);
  }
  public ngOnInit() {
    if (AppService.data != null) {
      this.data = AppService.data;
    }else {
      this.data=new Task()
    }
  }

}
