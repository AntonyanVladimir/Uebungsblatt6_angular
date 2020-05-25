import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaglisteComponent } from './tagliste.component';

describe('TaglisteComponent', () => {
  let component: TaglisteComponent;
  let fixture: ComponentFixture<TaglisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaglisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaglisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
