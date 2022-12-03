import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskCreateComponent } from './pages/task-create/task-create.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path:"list", component: TaskListComponent },
  { path:"create", component: TaskCreateComponent },
  { path:"", redirectTo: "list", pathMatch: "full" },
  { path:"**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
