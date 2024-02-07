import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstcontainerMobileComponent } from './firstcontainer-mobile.component';

describe('FirstcontainerMobileComponent', () => {
  let component: FirstcontainerMobileComponent;
  let fixture: ComponentFixture<FirstcontainerMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstcontainerMobileComponent]
    });
    fixture = TestBed.createComponent(FirstcontainerMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
