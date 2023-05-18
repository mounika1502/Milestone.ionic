import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DealersPage } from './dealers.page';

describe('DealersPage', () => {
  let component: DealersPage;
  let fixture: ComponentFixture<DealersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DealersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
