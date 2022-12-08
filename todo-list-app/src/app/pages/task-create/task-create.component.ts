import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import Task from 'src/app/models/Task';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent {
  newTask: Task = new Task("Nova Tarefa");

  taskForm?: FormGroup;

  ngOnInit() {
    this.taskForm = new FormGroup({
      title: new FormControl(this.newTask.title),
      description: new FormControl(this.newTask.description),
      dueDate: new FormControl(this.newTask.dueDate),
      status: new FormControl(this.newTask.status),
    });
  }

  onSubmitForm() {
    // this.newTask.title = this.taskForm?.controls['title'].value;
    // this.newTask.description = this.taskForm?.controls['description'].value;
    // this.newTask.dueDate = new Date(this.taskForm?.controls['dueDate'].value);
    // this.newTask.status = this.taskForm?.controls['status'].value;

    // const formControl = this.taskForm?.controls;

    this.taskForm?.patchValue({
      title: this.taskForm?.controls['title'].value,
      description: this.taskForm?.controls['description'].value,
      dueDate: new Date(this.taskForm?.controls['dueDate'].value),
      status: this.taskForm?.controls['status'].value
    })

    this.newTask = this.taskForm?.value;

    console.log(this.newTask);
  }
}
