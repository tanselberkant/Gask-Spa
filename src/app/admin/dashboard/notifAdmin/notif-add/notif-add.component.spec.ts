/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NotifAddComponent } from './notif-add.component';

describe('NotifAddComponent', () => {
  let component: NotifAddComponent;
  let fixture: ComponentFixture<NotifAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
