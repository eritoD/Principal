import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AceptarPage } from './aceptar.page';

describe('AceptarPage', () => {
  let component: AceptarPage;
  let fixture: ComponentFixture<AceptarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AceptarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
