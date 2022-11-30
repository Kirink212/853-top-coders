import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input("tit") title: string = "Tarefa Não Especificada";
  description: string = "Sem descrição";
  dueDate: Date = new Date();
  status: boolean = false;


}
