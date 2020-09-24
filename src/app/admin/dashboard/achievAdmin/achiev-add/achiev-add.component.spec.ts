/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AchievAddComponent } from './achiev-add.component';

describe('AchievAddComponent', () => {
  let component: AchievAddComponent;
  let fixture: ComponentFixture<AchievAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
