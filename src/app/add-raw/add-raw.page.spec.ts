import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AddRawPage } from './add-raw.page';

describe('AddRawPage', () => {
  let component: AddRawPage;
  let fixture: ComponentFixture<AddRawPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddRawPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
