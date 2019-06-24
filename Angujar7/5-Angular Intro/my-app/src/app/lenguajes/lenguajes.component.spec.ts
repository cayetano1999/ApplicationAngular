import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguajesComponent } from './lenguajes.component';

describe('LenguajesComponent', () => {
  let component: LenguajesComponent;
  let fixture: ComponentFixture<LenguajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LenguajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LenguajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
