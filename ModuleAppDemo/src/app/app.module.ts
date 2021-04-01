import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavBarCompComponent } from './Billing/nav-bar-comp/nav-bar-comp.component';
import { FirstCompComponent } from './Billing/first-comp/first-comp.component';
import { SecondCompComponent } from './Billing/second-comp/second-comp.component';
import { AppWrapperModule } from './app-wrapper.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarCompComponent
  ],
  imports: [
    BrowserModule,
    AppWrapperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
