import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BasicPrinciplesComponent} from './basic-principles.component';

describe('BasicPrinciplesComponent', () => {
  let component: BasicPrinciplesComponent;
  let fixture: ComponentFixture<BasicPrinciplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicPrinciplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicPrinciplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
