import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppScrollBarComponent } from './app-scroll-bar.component';

describe('AppScrollBarComponent', () => {
  let component: AppScrollBarComponent;
  let fixture: ComponentFixture<AppScrollBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppScrollBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppScrollBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
