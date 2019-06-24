import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfocomponentComponent } from './infocomponent.component';

describe('InfocomponentComponent', () => {
  let component: InfocomponentComponent;
  let fixture: ComponentFixture<InfocomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfocomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfocomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
