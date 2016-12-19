import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthGuard } from '../service/authService/auth-guard.service';

const adminRouter: Routes = [
    { path: '', component: AdminComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRouter)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }