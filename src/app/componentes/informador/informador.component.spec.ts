import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformadorComponent } from './informador.component';

describe('InformadorComponent', () => {
  let component: InformadorComponent;
  let fixture: ComponentFixture<InformadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
