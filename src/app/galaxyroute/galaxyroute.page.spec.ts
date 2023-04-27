import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GalaxyroutePage } from './galaxyroute.page';

describe('GalaxyroutePage', () => {
  let component: GalaxyroutePage;
  let fixture: ComponentFixture<GalaxyroutePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GalaxyroutePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
