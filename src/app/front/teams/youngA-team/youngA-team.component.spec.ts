/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YoungATeamComponent } from './youngA-team.component';

describe('YoungATeamComponent', () => {
  let component: YoungATeamComponent;
  let fixture: ComponentFixture<YoungATeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoungATeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoungATeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
