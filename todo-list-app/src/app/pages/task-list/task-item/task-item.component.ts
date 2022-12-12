import { Component, Input, OnChanges } from '@angular/core';

import { TaskService } from './../../../services/task.service';
import Task from 'src/app/models/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnChanges {
  // @Input("tit") title: string = "Tarefa Não Especificada";
  // description: string = "Sem descrição";
  // dueDate: Date = new Date();
  // status: boolean = false;

  // Versão com possível undefined
  @Input() task?: Task;

  /* @Input() task: Task = {
    title: "Tarefa Não Especificada",
    description: "Sem descrição",
    dueDate: new Date(),
    status: false
  }; */

  constructor(private taskService: TaskService) {
    // this.task.title = "Tarefa Não Especificada";
    // this.task.description = "Sem descrição";
    // this.task.dueDate = new Date();
    // this.task.status = false;
  }

  ngOnInit() {
    console.log(`Task List Item com id = ${this.task?.id}!`);
  }

  changeStatus(): void {
    if (this.task) this.task.status = !this.task?.status;
  }

  getColor(): string {
    return this.task?.status ? '#32a852' : '';
  }

  deleteItem() {
    if (this.task) this.taskService.deleteTask(this.task.id);
  }

  ngOnChanges(): void {
    console.log('Task List Item has changed!');
  }
}
