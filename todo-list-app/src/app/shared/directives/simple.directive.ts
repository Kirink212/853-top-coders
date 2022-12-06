import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class SimpleDirective {
  constructor(private el: ElementRef<HTMLParagraphElement>) {
    console.log(el);
    
    this.el.nativeElement.style.backgroundColor = 'green';

    el.nativeElement.addEventListener('mouseover', () => {
      this.el.nativeElement.style.backgroundColor = 'yellow';
    })

    el.nativeElement.addEventListener('mouseleave', () => {
      this.el.nativeElement.style.backgroundColor = 'green';
    })

  }
}
