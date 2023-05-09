import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DealerordersPage } from './dealerorders.page';

describe('DealerordersPage', () => {
  let component: DealerordersPage;
  let fixture: ComponentFixture<DealerordersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DealerordersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
