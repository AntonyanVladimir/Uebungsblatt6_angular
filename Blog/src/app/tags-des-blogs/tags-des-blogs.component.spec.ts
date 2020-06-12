import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsDesBlogsComponent } from './tags-des-blogs.component';

describe('TagsDesBlogsComponent', () => {
  let component: TagsDesBlogsComponent;
  let fixture: ComponentFixture<TagsDesBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsDesBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsDesBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
