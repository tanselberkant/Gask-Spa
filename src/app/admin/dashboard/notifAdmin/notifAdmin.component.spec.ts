/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NotifAdminComponent } from './notifAdmin.component';

describe('NotifAdminComponent', () => {
  let component: NotifAdminComponent;
  let fixture: ComponentFixture<NotifAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
