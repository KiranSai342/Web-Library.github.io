import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularSubjectsComponent } from './popular-subjects.component';

describe('PopularSubjectsComponent', () => {
  let component: PopularSubjectsComponent;
  let fixture: ComponentFixture<PopularSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularSubjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
