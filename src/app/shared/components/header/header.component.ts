import {
  Component,
  ElementRef,
  inject,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  router: Router = inject(Router);

  render: Renderer2 = inject(Renderer2);
  @ViewChild('linkSer') linkser!: ElementRef;
  @ViewChild('dropdown') dropdown!: ElementRef;
  @ViewChild('angle') angle!: ElementRef;
  myEvent = false;

  hideDrop = false;

  isHomePage(): boolean {
    return this.router.url === '/home';
  }

  ngAfterViewInit(): void {
    this.render.listen(this.linkser.nativeElement, 'click', (e) => {
      e.preventDefault();

      if (this.myEvent) {
        this.render.removeClass(this.dropdown.nativeElement, 'active');
        this.render.addClass(this.angle.nativeElement, 'fa-angle-down');
        this.render.removeClass(this.angle.nativeElement, 'fa-angle-up');
      } else {
        this.render.addClass(this.dropdown.nativeElement, 'active');
        this.render.addClass(this.angle.nativeElement, 'fa-angle-up');
        this.render.removeClass(this.angle.nativeElement, 'fa-angle-down');
      }

      // تغيير حالة myEvent
      this.myEvent = !this.myEvent;
    });
  }
}
