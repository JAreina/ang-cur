import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiPipeComponent } from './mi-pipe.component';

describe('MiPipeComponent', () => {
  let component: MiPipeComponent;
  let fixture: ComponentFixture<MiPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
