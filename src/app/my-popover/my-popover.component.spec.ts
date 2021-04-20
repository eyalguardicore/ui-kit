import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPopoverComponent } from './my-popover.component';

describe('MyPopoverComponent', () => {
  let component: MyPopoverComponent;
  let fixture: ComponentFixture<MyPopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPopoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
