import { Directive,ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[diretiva]'
})
export class DiretivaDirective {

  constructor(
    private el: ElementRef, 
    private renderer: Renderer2
    ) {
      
      this.el.nativeElement.style.borderRadius = '10px'
      this.el.nativeElement.style.border = 'none'
      this.el.nativeElement.style.cursor = 'pointer'
      this.el.nativeElement.style.color = 'blue' 
    }
}
