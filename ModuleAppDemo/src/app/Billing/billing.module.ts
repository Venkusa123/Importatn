
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BillingWrapperModule } from './billing-wrapper.module';
import { BillinngComponent } from './billing.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { NotFoundComponent } from './not-found/notfound.component';
import { SecondCompComponent } from './second-comp/second-comp.component';
import {HttpClientModule} from '@angular/common/http';
import { FirstService } from './first-comp/first.service';

@NgModule({
  declarations: [
    FirstCompComponent,
    SecondCompComponent,
    NotFoundComponent,BillinngComponent
  ],
  imports: [
    CommonModule,BillingWrapperModule,ReactiveFormsModule,FormsModule,HttpClientModule
  ],
  providers:[FirstService]
})
export class BillingModule { }