import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuchergebnisComponent } from './suchergebnis.component';

describe('SuchergebnisComponent', () => {
  let component: SuchergebnisComponent;
  let fixture: ComponentFixture<SuchergebnisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuchergebnisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuchergebnisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
