import { TaskService } from './../../services/task.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import Task from 'src/app/models/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnChanges {
  taskList: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskList = this.taskService.getTasks();
    console.log("Task List was born!");
  }

  ngOnChanges():void {
    console.log("Task List has changed!");
  }
}
