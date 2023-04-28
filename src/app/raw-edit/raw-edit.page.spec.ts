import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RawEditPage } from './raw-edit.page';

describe('RawEditPage', () => {
  let component: RawEditPage;
  let fixture: ComponentFixture<RawEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RawEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
