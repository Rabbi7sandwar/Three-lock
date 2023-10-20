import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Door3PuzzlePage } from './door3-puzzle.page';

describe('Door3PuzzlePage', () => {
  let component: Door3PuzzlePage;
  let fixture: ComponentFixture<Door3PuzzlePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Door3PuzzlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
