import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewdetailsPage } from './viewdetails.page';

describe('ViewdetailsPage', () => {
  let component: ViewdetailsPage;
  let fixture: ComponentFixture<ViewdetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
