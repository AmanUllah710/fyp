import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyfooterComponent } from './supplyfooter.component';

describe('SupplyfooterComponent', () => {
  let component: SupplyfooterComponent;
  let fixture: ComponentFixture<SupplyfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
