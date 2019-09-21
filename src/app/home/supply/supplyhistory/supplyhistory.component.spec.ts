import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyhistoryComponent } from './supplyhistory.component';

describe('SupplyhistoryComponent', () => {
  let component: SupplyhistoryComponent;
  let fixture: ComponentFixture<SupplyhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
