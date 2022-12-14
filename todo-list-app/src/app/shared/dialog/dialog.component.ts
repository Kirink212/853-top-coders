import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import Task from 'src/app/models/Task';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  // @Input() title: string = "Dialog Title";

  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string }) {

  }
}
