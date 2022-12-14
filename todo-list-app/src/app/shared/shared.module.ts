import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './../material/material.module';

import { SimpleDirective } from './directives/simple.directive';
import { TaskDirective } from './directives/task.directive';

import { StatusPipe } from './pipes/status.pipe';

import { HeaderComponent } from './header/header.component';
import { DialogComponent } from './dialog/dialog.component';
import { TaskFormComponent } from './task-form/task-form.component';

@NgModule({
  declarations: [HeaderComponent, StatusPipe, TaskDirective, SimpleDirective, DialogComponent, TaskFormComponent],
  imports: [CommonModule, MaterialModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [HeaderComponent, StatusPipe, TaskDirective, SimpleDirective, DialogComponent, TaskFormComponent],
})
export class SharedModule {}
