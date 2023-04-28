import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdermanagePage } from './ordermanage.page';

describe('OrdermanagePage', () => {
  let component: OrdermanagePage;
  let fixture: ComponentFixture<OrdermanagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OrdermanagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
