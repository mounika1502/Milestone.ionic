import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RawProductPage } from './raw-product.page';

describe('RawProductPage', () => {
  let component: RawProductPage;
  let fixture: ComponentFixture<RawProductPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RawProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
