import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinetodayComponent } from './linetoday.component';

describe('LinetodayComponent', () => {
  let component: LinetodayComponent;
  let fixture: ComponentFixture<LinetodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinetodayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinetodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
