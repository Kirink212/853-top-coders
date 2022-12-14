import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { TaskService } from '../../services/task.service';

import Task from 'src/app/models/Task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  @Input() newTask: Task = new Task("Nova Tarefa");
  @Input() requestType: string = "post";
  @Input() closeDialog: () => void = () => {};

  taskForm?: FormGroup;

  constructor(private taskService: TaskService, public dialogRef: MatDialogRef<any>) {}

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

    this.newTask = {id: this.newTask.id, ...this.taskForm?.value};

    if (this.requestType == "post") {
      this.taskService.postTask(this.newTask);
    } else {
      this.taskService.updateTask(this.newTask.id, this.newTask);
    }

    this.dialogRef.close();
    // this.closeDialog();

    // console.log(this.newTask.id);
  }
}
