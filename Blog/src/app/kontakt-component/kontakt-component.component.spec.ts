import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KontaktComponentComponent } from './kontakt-component.component';

describe('KontaktComponentComponent', () => {
  let component: KontaktComponentComponent;
  let fixture: ComponentFixture<KontaktComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontaktComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontaktComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
