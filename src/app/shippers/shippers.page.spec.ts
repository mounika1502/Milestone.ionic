import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShippersPage } from './shippers.page';

describe('ShippersPage', () => {
  let component: ShippersPage;
  let fixture: ComponentFixture<ShippersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShippersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
