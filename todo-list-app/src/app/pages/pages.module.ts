import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskItemComponent } from './task-list/task-item/task-item.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [
    TaskListComponent,
    TaskItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TaskListComponent,
    TaskItemComponent
  ]
})
export class PagesModule { }
