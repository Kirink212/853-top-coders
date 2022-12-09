import { Injectable } from '@angular/core';

import Task from 'src/app/models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskList: Task[] = [
    {
      id: 1,
      title: "Lavar a louça",
      /* description: "Pior tarefa da vida", */
      dueDate: new Date(),
      status: true
    },
    {
      id: 2,
      title: "Fazer exercícios do Módulo de Angular",
      description: "Preciso treinar essa bagaça",
      dueDate: new Date(),
      status: true
    },
    {
      id: 3,
      title: "Passear com o cachorro",
      description: "Meu melhor amigo <3",
      dueDate: new Date(),
      status: false
    },
    {
      id: 4,
      title: "Fazer o planejamento do dia seguinte",
      description: "Para facilitar minha vida... e minha ansiedade",
      dueDate: new Date(),
      status: false
    }
  ];

  constructor() {
    // Task.updateLastId(this.taskList[this.taskList.length-1].id);
    console.log(Task.lastId);
  }

  getTasks(): Task[] {
    return this.taskList;
  }

  postTask(newTask: Task): void {
    this.taskList.push(newTask);
  }

  updateTask() {

  }

  deleteTask() {

  }
}
