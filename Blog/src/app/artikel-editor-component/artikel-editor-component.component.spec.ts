import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikelEditorComponentComponent } from './artikel-editor-component.component';

describe('ArtikelEditorComponentComponent', () => {
  let component: ArtikelEditorComponentComponent;
  let fixture: ComponentFixture<ArtikelEditorComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtikelEditorComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtikelEditorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
