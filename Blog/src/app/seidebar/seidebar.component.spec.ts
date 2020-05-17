import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeidebarComponent } from './seidebar.component';

describe('SeidebarComponent', () => {
  let component: SeidebarComponent;
  let fixture: ComponentFixture<SeidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
