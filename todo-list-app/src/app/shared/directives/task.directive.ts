import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[taskDirective]',
})
export class TaskDirective implements OnChanges {
  @Input()
  taskDirective: boolean | undefined;

  constructor(private el: ElementRef) {
    console.log(this.taskDirective);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.taskDirective) {
      this.el.nativeElement.style.backgroundColor = 'green';
    } else {
      this.el.nativeElement.style.backgroundColor = 'red';
    }
  }
}
