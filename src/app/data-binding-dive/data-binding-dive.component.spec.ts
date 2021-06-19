import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DataBindingDiveComponent} from './data-binding-dive.component';

describe('DataBindingDiveComponent', () => {
  let component: DataBindingDiveComponent;
  let fixture: ComponentFixture<DataBindingDiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindingDiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingDiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
