import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { FirstCompComponent } from './first-comp.component';

describe('FirstCompComponent checking form validations in react', () => {
  let component: FirstCompComponent;
  let fixture: ComponentFixture<FirstCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstCompComponent ],
      imports:[ReactiveFormsModule,FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('checking name is enetered correctly',()=>{
    let getTag=fixture.debugElement.query(By.css('.formsubmitClass'))
    let k = component.firstForm.patchValue({
      name:[''],
      id:['123123'],
      group:['Information Technology'],
      tandc:['true']
    });
    fixture.debugElement.triggerEventHandler('click',{})
    fixture.detectChanges();
    expect(component.firstForm.valid).toBeTruthy();
  })
});