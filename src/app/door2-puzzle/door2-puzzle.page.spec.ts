import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Door2PuzzlePage } from './door2-puzzle.page';

describe('Door2PuzzlePage', () => {
  let component: Door2PuzzlePage;
  let fixture: ComponentFixture<Door2PuzzlePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Door2PuzzlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
