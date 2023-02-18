import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectBooksComponent } from './subject-books.component';

describe('SubjectBooksComponent', () => {
  let component: SubjectBooksComponent;
  let fixture: ComponentFixture<SubjectBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
