import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
   
  }

  setBgColor(color: string) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      color
    )
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBgColor('yellow')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBgColor('')
  }
}


