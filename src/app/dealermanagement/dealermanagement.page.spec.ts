import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DealermanagementPage } from './dealermanagement.page';

describe('DealermanagementPage', () => {
  let component: DealermanagementPage;
  let fixture: ComponentFixture<DealermanagementPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DealermanagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
