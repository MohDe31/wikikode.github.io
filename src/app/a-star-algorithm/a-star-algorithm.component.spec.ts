import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AStarAlgorithmComponent } from './a-star-algorithm.component';

describe('AStarAlgorithmComponent', () => {
  let component: AStarAlgorithmComponent;
  let fixture: ComponentFixture<AStarAlgorithmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AStarAlgorithmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AStarAlgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
