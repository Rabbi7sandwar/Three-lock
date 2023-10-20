import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Door1PuzzlePage } from './door1-puzzle.page';

describe('Door1PuzzlePage', () => {
  let component: Door1PuzzlePage;
  let fixture: ComponentFixture<Door1PuzzlePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Door1PuzzlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
