import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { FirstCompComponent } from './first-comp.component';
import { FirstService } from './first.service';

describe('FirstCompComponent checking form validations in react', () => {
  let component: FirstCompComponent;
  let fixture: ComponentFixture<FirstCompComponent>;
  let firstService:FirstService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstCompComponent ],
      imports:[ReactiveFormsModule,FormsModule,HttpClientModule],
      providers:[FirstService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstCompComponent);
    component = fixture.componentInstance;
    firstService =TestBed.get(FirstService);    
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('checking name is enetered correctly',()=>{
    let getTag=fixture.debugElement.query(By.css('#formsubmitClass'))
    let k = component.firstForm.patchValue({
      name:[''],
      id:['123123'],
      group:['Information Technology'],
      tandc:['true']
    });
    getTag.triggerEventHandler("click",{});
    fixture.detectChanges();
    expect(component.firstForm.valid).toBeTruthy();
  });
  it('spying on a service,checking for the name to be Argentina',async(()=>{
    fixture.debugElement.injector.get(FirstService)
    let stub=spyOn(firstService,"getCountryNames").and.callFake(()=>{
      return of([{name:"mario"}])
    });
    // spyOn(firstService)
    component.getCountries();
    fixture.detectChanges();
    let name=component.countryName;
    expect(name).toBe("mario");
  }));
});