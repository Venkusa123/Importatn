import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  firstForm:FormGroup;
  groupList:any=[{
    'subject':'Computer Science','value':'Computer Science'
  },{
    'subject':'Data Science','value':'Data Science'
  },{
    'subject':'Information Technology','value':'Information Technology'
  },{
    'subject':'Big Data','value':'Big Data'
  },{
    'subject':'Sales Force','value':'Sales Force'
  }]
  ngOnInit() {
    this.firstForm = this.fb.group({
      name:['',Validators.required],
      id:['',Validators.required],
      group:['',Validators.required],
      tandc:['']
    })
  }
  firstFormSubmitted(){
    if(this.firstForm.valid){
      console.log("First Form is valid \n");
      console.log(this.firstForm.value);
      console.log(this.firstForm.valid);
      
      
    }else{
      console.log("First Form is invalid");
      
      console.log(this.firstForm.valid);
    }
  }
}