import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajicComponent } from './majic.component';

describe('MajicComponent', () => {
  let component: MajicComponent;
  let fixture: ComponentFixture<MajicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MajicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MajicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
