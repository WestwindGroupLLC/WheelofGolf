import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WheelGamesPage } from './wheel-games.page';

describe('WheelGamesPage', () => {
  let component: WheelGamesPage;
  let fixture: ComponentFixture<WheelGamesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WheelGamesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
