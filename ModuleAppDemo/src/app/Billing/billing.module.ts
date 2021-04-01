
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BillingWrapperModule } from './billing-wrapper.module';
import { BillinngComponent } from './billing.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { NotFoundComponent } from './not-found/notfound.component';
import { SecondCompComponent } from './second-comp/second-comp.component';

@NgModule({
  declarations: [
    FirstCompComponent,
    SecondCompComponent,
    NotFoundComponent,BillinngComponent
  ],
  imports: [
    CommonModule,BillingWrapperModule
  ]
})
export class BillingModule { }