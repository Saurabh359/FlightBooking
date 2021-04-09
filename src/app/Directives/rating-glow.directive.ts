import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRatingGlow]'
})
export class RatingGlowDirective {

  constructor(public elementRef: ElementRef) { }

  @Input('appRatingGlow') RatingGlow: any;
  
  @HostListener('mouseenter') onMouseEnter(){
    this.elementRef.nativeElement.children[0].style="color:green";
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.elementRef.nativeElement.children[0].style="color:white";
  }
}
