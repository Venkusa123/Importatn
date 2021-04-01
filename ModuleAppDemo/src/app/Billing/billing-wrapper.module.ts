import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BillinngComponent } from "./billing.component";
import { FirstCompComponent } from "./first-comp/first-comp.component";
import { NotFoundComponent } from "./not-found/notfound.component";
import { SecondCompComponent } from "./second-comp/second-comp.component";

const routes:Routes=[
    {
        path:'billing',
        children:[
        {
            path:'first',
            component:FirstCompComponent    
        },{
            path:'second',
            component:SecondCompComponent
        }]
    },{
        path:'first',
        component:FirstCompComponent
    },{
        path:'second',
        component:SecondCompComponent
    },{
        path:'',
        redirectTo:'/first',
        pathMatch:'full'
    },{
        path:'**',
        component:NotFoundComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class BillingWrapperModule{}