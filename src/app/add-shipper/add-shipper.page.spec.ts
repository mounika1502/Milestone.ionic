import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AddShipperPage } from './add-shipper.page';

describe('AddShipperPage', () => {
  let component: AddShipperPage;
  let fixture: ComponentFixture<AddShipperPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddShipperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
