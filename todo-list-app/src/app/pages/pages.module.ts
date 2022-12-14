import { TaskCreateComponent } from './task-create/task-create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../material/material.module';
import { SharedModule } from '../shared/shared.module';

import { TaskItemComponent } from './task-list/task-item/task-item.component';
import { TaskListComponent } from './task-list/task-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    TaskListComponent,
    TaskItemComponent,
    PageNotFoundComponent,
    TaskCreateComponent
  ],
  imports: [CommonModule, MaterialModule, SharedModule, FormsModule, ReactiveFormsModule],
  exports: [TaskListComponent, TaskItemComponent],
})
export class PagesModule {}
