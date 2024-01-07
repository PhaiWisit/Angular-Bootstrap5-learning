import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengerappComponent } from './messengerapp.component';

describe('MessengerappComponent', () => {
  let component: MessengerappComponent;
  let fixture: ComponentFixture<MessengerappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessengerappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessengerappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
