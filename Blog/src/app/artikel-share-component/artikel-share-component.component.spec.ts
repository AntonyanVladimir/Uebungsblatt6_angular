import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikelShareComponentComponent } from './artikel-share-component.component';

describe('ArtikelShareComponentComponent', () => {
  let component: ArtikelShareComponentComponent;
  let fixture: ComponentFixture<ArtikelShareComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtikelShareComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtikelShareComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
