import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OUniversoComponent } from './o-universo.component';

describe('OUniversoComponent', () => {
  let component: OUniversoComponent;
  let fixture: ComponentFixture<OUniversoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OUniversoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OUniversoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
