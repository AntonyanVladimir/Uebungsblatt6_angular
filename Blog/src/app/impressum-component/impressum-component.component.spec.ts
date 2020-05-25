import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressumComponentComponent } from './impressum-component.component';

describe('ImpressumComponentComponent', () => {
  let component: ImpressumComponentComponent;
  let fixture: ComponentFixture<ImpressumComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpressumComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpressumComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
