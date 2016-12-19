import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCComponent } from './page-c/page-c.component';
import { AuthGuard } from '../service/authService/auth-guard.service';


const appRoutes: Routes = [
    {
        path: '',
        component: PageCComponent,
        canActivate: [AuthGuard]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ChildRoutingModule { }