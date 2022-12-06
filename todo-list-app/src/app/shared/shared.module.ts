import { SimpleDirective } from './directives/simple.directive';
import { TaskDirective } from './directives/task.directive';
import { StatusPipe } from './pipes/status.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../material/material.module';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, StatusPipe, TaskDirective, SimpleDirective],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [HeaderComponent, StatusPipe, TaskDirective, SimpleDirective],
})
export class SharedModule {}
