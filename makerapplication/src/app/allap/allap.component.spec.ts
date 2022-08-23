import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllapComponent } from './allap.component';

describe('AllapComponent', () => {
  let component: AllapComponent;
  let fixture: ComponentFixture<AllapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
