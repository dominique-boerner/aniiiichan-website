import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamtimesComponent } from './streamtimes.component';

describe('StreamtimesComponent', () => {
  let component: StreamtimesComponent;
  let fixture: ComponentFixture<StreamtimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamtimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamtimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
