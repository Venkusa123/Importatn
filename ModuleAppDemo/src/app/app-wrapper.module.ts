import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes:Routes=[
    {
        path:'',
        loadChildren:()=>import('./Billing/billing.module').then(succ=>succ.BillingModule)
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppWrapperModule{}
