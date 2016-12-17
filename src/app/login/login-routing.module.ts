import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { AuthService } from '../child/auth.service';
import { AuthGuard } from '../child/auth-guard.service';

const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class LoginRoutingModule { }