import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanydetailsPage } from './companydetails.page';

describe('CompanydetailsPage', () => {
  let component: CompanydetailsPage;
  let fixture: ComponentFixture<CompanydetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CompanydetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
