import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


import { LoveComponent } from "./shared/components/love/love.component";
import { DashboardComponent } from "./shared/components/dashboard/dashboard.component";
import { UserComponent } from "./shared/components/user/user.component";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";


const routes : Routes =[
    {
        path:"",component : DashboardComponent
    },
    {
        path:"love", component: LoveComponent
    },
    {
        path : "user" , component :UserComponent
    },
    {
        path : "pageNotFound" , component :PageNotFoundComponent
    },
    {
        path : "**",
        redirectTo : 'pageNotFound'
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class appRoutingModule{

}