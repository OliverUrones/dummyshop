import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseLoggedComponent } from './base-logged.component';

describe('BaseLoggedComponent', () => {
  let component: BaseLoggedComponent;
  let fixture: ComponentFixture<BaseLoggedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseLoggedComponent]
    });
    fixture = TestBed.createComponent(BaseLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
