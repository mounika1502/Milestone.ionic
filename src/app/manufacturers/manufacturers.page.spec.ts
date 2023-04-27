import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManufacturersPage } from './manufacturers.page';

describe('ManufacturersPage', () => {
  let component: ManufacturersPage;
  let fixture: ComponentFixture<ManufacturersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ManufacturersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
