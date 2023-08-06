import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploracaoComponent } from './exploracao.component';

describe('ExploracaoComponent', () => {
  let component: ExploracaoComponent;
  let fixture: ComponentFixture<ExploracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploracaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
