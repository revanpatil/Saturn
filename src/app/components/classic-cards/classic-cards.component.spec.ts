import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicCardsComponent } from './classic-cards.component';

describe('ClassicCardsComponent', () => {
  let component: ClassicCardsComponent;
  let fixture: ComponentFixture<ClassicCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassicCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassicCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
