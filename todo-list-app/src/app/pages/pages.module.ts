import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from './task-list/task-item/task-item.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TaskListComponent,
    TaskItemComponent,
    TaskCreateComponent,
    PageNotFoundComponent,
  ],
  imports: [CommonModule, MaterialModule, SharedModule],
  exports: [TaskListComponent, TaskItemComponent],
})
export class PagesModule {}
