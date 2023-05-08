import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddCompanyPage } from './add-company.page';

describe('AddCompanyPage', () => {
  let component: AddCompanyPage;
  let fixture: ComponentFixture<AddCompanyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddCompanyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
