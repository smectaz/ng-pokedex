import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  Input,
  HostBinding,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @HostBinding('style.backgroundColor') backgroundColor = this.defaultColor;
  @Input('appBasicHighlight') highlightColor = 'green';

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private router: Router
  ) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color','green');
  }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter(event: Event) {
    this.backgroundColor = this.highlightColor;
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color','green');
  }

  @HostListener('mouseleave') mouseLeave(event: Event) {
    this.backgroundColor = this.defaultColor;
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }
}
