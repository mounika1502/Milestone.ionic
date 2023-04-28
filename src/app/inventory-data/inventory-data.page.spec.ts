import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InventoryDataPage } from './inventory-data.page';

describe('InventoryDataPage', () => {
  let component: InventoryDataPage;
  let fixture: ComponentFixture<InventoryDataPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InventoryDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
