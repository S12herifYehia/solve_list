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

  @ViewChild('menu') menu!: ElementRef;
  @ViewChild('list') list!: ElementRef;
  myEvent = false;
  myEventList = false;

  hideDrop = false;

  private clickListener!:Function;
  isHomePage(): boolean {
    return this.router.url === '/home';
  }

  ngOnInit(): void {

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

    this.clickListener = this.render.listen(this.menu.nativeElement, 'click', (e) => {
      this.toggleMenu();
      e.stopPropagation()
      // this.showMenu();
    });

 
  }

  toggleMenu() {
    this.myEventList = !this.myEventList;
    if (this.myEventList) {
      this.render.removeClass(this.menu.nativeElement, 'fa-bars');
      this.render.addClass(this.menu.nativeElement, 'fa-xmark');
      this.render.addClass(this.list.nativeElement,'show')
    } else {
      this.render.addClass(this.menu.nativeElement, 'fa-bars');
      this.render.removeClass(this.menu.nativeElement, 'fa-xmark');
      this.render.removeClass(this.list.nativeElement,'show')
    }

  
  


    
  }






  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

    if(this.clickListener){
      this.clickListener()
    }
  }
}
