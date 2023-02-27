import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryUsNowComponent } from './try-us-now.component';

describe('TryUsNowComponent', () => {
  let component: TryUsNowComponent;
  let fixture: ComponentFixture<TryUsNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TryUsNowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TryUsNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
