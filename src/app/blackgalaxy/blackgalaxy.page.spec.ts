import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlackgalaxyPage } from './blackgalaxy.page';

describe('BlackgalaxyPage', () => {
  let component: BlackgalaxyPage;
  let fixture: ComponentFixture<BlackgalaxyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BlackgalaxyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
