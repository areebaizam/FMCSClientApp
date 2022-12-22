import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { eMatElevation } from '@tap/shared/models/common/common.model';

@Directive({
  selector: '[tapMatElevation]',
  standalone: true
})
export class MatElevationDirective implements OnChanges {
  @Input()
  // defaultElevation = enumMatElevation.DEFAULT_ELEVATION;
  defaultElevation = 0;

  @Input()
  raisedElevation = eMatElevation.RAISED_ELEVATION;

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.setElevation(this.defaultElevation);
  }

  ngOnChanges(_changes: SimpleChanges) {
    this.setElevation(this.defaultElevation);
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.setElevation(this.raisedElevation);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.setElevation(this.defaultElevation);
  }

  setElevation(amount: number) {
    // remove all elevation classes
    const classesToRemove = Array.from(
      (<HTMLElement>this.element.nativeElement).classList
    ).filter((c) => c.startsWith('mat-elevation-z'));
    classesToRemove.forEach((c) => {
      this.renderer.removeClass(this.element.nativeElement, c);
    });

    // add the given elevation class
    const newClass = `mat-elevation-z${amount}`;
    this.renderer.addClass(this.element.nativeElement, newClass);
  }
}

