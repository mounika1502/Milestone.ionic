import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RawDataPage } from './raw-data.page';

describe('RawDataPage', () => {
  let component: RawDataPage;
  let fixture: ComponentFixture<RawDataPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RawDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
