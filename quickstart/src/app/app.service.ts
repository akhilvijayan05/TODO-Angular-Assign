import {Injectable} from "@angular/core";
import {Task} from "./app.task";

@Injectable()

export class AppService{
  static data:Task=null;
  static details:Task[]=[{
    date: '5/1/2017',
    title:'Work',
    description:'Plenty of work today',
    priority: 'Medium'
  },
    {
      date: '15/1/2017',
      title:'Study',
      description:'Need to learn scala',
      priority: 'High'
    },
    {
      date: '5/2/2017',
      title:'Gym',
      description:'Need to do workout',
      priority: 'Low'
    }];

  setDetails(task:Task){
    AppService.details.push(task);
  }
  store(task:Task){
    AppService.data=task;
  }
}
