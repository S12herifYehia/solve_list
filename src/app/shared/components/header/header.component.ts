import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  inject,
  PLATFORM_ID,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,

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
  @ViewChild('header') header!: ElementRef;
  // @ViewChild('body') body!: ElementRef;

  @ViewChild('menu') menu!: ElementRef;
  @ViewChild('list') list!: ElementRef;

  @ViewChildren('linka') linka!:QueryList<ElementRef>

  myEvent = false;
  myEventList = false;

  hideDrop = false;

  private clickListener!: Function;
  isHomePage(): boolean {
    return this.router.url === '/home';
  }

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {

   
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if(isPlatformBrowser(this.platformId)){
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      if (scrollPosition >= 300) {
        this.render.addClass(this.header.nativeElement, 'active');
        // this.render.addClass()
        this.linka.forEach(a=>{
          this.render.addClass(a.nativeElement,'scroll')
        })
      } else {
        this.render.removeClass(this.header.nativeElement, 'active');
        this.linka.forEach(a=>{
          this.render.removeClass(a.nativeElement,'scroll')
        })
      }
    }
   
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      var documentBody = document.body;
      // if(typeof document !== undefined && typeof window !==undefined){
      this.render.listen(this.linkser.nativeElement, 'click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.toggleDropdown();
      });

      this.clickListener = this.render.listen(
        this.menu.nativeElement,
        'click',
        (e) => {
          this.toggleMenu();
          e.stopPropagation();
        }
      );
      this.clickListener = this.render.listen(document.body, 'click', (e) => {
        if (this.myEvent && !this.dropdown.nativeElement.contains(e.target)) {
          this.closeDropdown();
          this.myEvent = !this.myEvent;
        }
        // this.myEventList = !this.myEventList;
        this.closeToggle();

     
      });
    }
  }

  toggleDropdown() {
    this.myEvent = !this.myEvent;
    if (this.myEvent) {
      this.openDropdown();
    } else {
      this.closeDropdown();
    }
  }

  openDropdown() {
    this.render.addClass(this.dropdown.nativeElement, 'active');
    this.render.addClass(this.angle.nativeElement, 'fa-angle-up');
    this.render.removeClass(this.angle.nativeElement, 'fa-angle-down');
  }

  closeDropdown() {
    this.render.removeClass(this.dropdown.nativeElement, 'active');
    this.render.removeClass(this.angle.nativeElement, 'fa-angle-up');
    this.render.addClass(this.angle.nativeElement, 'fa-angle-down');
  }

  openToggle() {
    this.render.removeClass(this.menu.nativeElement, 'fa-bars');
    this.render.addClass(this.menu.nativeElement, 'fa-xmark');
    this.render.addClass(this.list.nativeElement, 'show');
  }

  closeToggle() {
    this.render.addClass(this.menu.nativeElement, 'fa-bars');
    this.render.removeClass(this.menu.nativeElement, 'fa-xmark');
    this.render.removeClass(this.list.nativeElement, 'show');
  }
  toggleMenu() {
    this.myEventList = !this.myEventList;
    if (this.myEventList) {
      this.openToggle();
    } else {
      this.closeToggle();
    }
  }

  ngOnDestroy(): void {
    if (this.clickListener) {
      this.clickListener();
    }
  }


}
