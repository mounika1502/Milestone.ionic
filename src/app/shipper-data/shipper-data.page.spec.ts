import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShipperDataPage } from './shipper-data.page';

describe('ShipperDataPage', () => {
  let component: ShipperDataPage;
  let fixture: ComponentFixture<ShipperDataPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShipperDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
