import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileloginPage } from './profilelogin.page';

describe('ProfileloginPage', () => {
  let component: ProfileloginPage;
  let fixture: ComponentFixture<ProfileloginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfileloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
