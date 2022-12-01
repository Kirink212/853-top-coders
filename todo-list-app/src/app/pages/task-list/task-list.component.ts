import { Component } from '@angular/core';
import Task from 'src/app/models/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  taskList: Task[] = [
    {
      title: "Lavar a louça",
      description: "Pior tarefa da vida",
      dueDate: new Date(),
      status: false
    },
    {
      title: "Fazer exercícios do Módulo de Angular",
      description: "Preciso treinar essa bagaça",
      dueDate: new Date(),
      status: false
    },
    {
      title: "Passear com o cachorro",
      description: "Meu melhor amigo <3",
      dueDate: new Date(),
      status: false
    },
    {
      title: "Fazer o planejamento do dia seguinte",
      description: "Para facilitar minha vida... e minha ansiedade",
      dueDate: new Date(),
      status: false
    }
  ];
}
