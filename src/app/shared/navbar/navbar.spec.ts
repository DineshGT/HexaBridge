import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Directive({
  selector: '[appHoverMenu]'
})
export class HoverMenuDirective {
  @Input('appHoverMenu') menuTrigger!: MatMenuTrigger;

  @HostListener('mouseenter') onMouseEnter() {
    this.menuTrigger.openMenu();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.menuTrigger.closeMenu();
  }
}
