import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersidebarComponent } from './ordersidebar.component';

describe('OrdersidebarComponent', () => {
  let component: OrdersidebarComponent;
  let fixture: ComponentFixture<OrdersidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
