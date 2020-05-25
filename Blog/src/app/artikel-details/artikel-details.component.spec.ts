import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikelDetailsComponent } from './artikel-details.component';

describe('ArtikelDetailsComponent', () => {
  let component: ArtikelDetailsComponent;
  let fixture: ComponentFixture<ArtikelDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtikelDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtikelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
