import { ComponentFixture, TestBed } from '@angular/core/testing';

import { perfilComponent } from './perfil.component';

describe('perfilComponent', () => {
  let component: perfilComponent;
  let fixture: ComponentFixture<perfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ perfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(perfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
