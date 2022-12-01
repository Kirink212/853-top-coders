import { Component, Input } from '@angular/core';

import Task from 'src/app/models/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  // @Input("tit") title: string = "Tarefa Não Especificada";
  // description: string = "Sem descrição";
  // dueDate: Date = new Date();
  // status: boolean = false;

  // Versão com possível undefined
  // @Input() task?: Task;

  @Input() task: Task = {
    title: "Tarefa Não Especificada",
    description: "Sem descrição",
    dueDate: new Date(),
    status: false
  };

  constructor() {
    // this.task.title = "Tarefa Não Especificada";
    // this.task.description = "Sem descrição";
    // this.task.dueDate = new Date();
    // this.task.status = false;
  }
}
