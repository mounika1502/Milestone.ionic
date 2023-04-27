import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShipperEditPage } from './shipper-edit.page';

describe('ShipperEditPage', () => {
  let component: ShipperEditPage;
  let fixture: ComponentFixture<ShipperEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShipperEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
