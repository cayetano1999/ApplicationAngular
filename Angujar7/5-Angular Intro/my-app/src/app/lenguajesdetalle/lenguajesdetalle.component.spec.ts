import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguajesdetalleComponent } from './lenguajesdetalle.component';

describe('LenguajesdetalleComponent', () => {
  let component: LenguajesdetalleComponent;
  let fixture: ComponentFixture<LenguajesdetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LenguajesdetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LenguajesdetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
