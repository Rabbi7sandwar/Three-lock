import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThreeDoorPage } from './three-door.page';

describe('ThreeDoorPage', () => {
  let component: ThreeDoorPage;
  let fixture: ComponentFixture<ThreeDoorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ThreeDoorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
