/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YoungBTeamComponent } from './youngB-team.component';

describe('YoungBTeamComponent', () => {
  let component: YoungBTeamComponent;
  let fixture: ComponentFixture<YoungBTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoungBTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoungBTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
