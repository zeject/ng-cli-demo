import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthGuard } from '../service/authService/auth-guard.service';
import { DetailComponent } from './index/detail/detail.component';
import { IndexComponent } from './index/list/index.component';
import { AddComponent } from './index/add/add.component';

const adminRouter: Routes = [
    {
        path: '',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                canActivateChild: [AuthGuard],
                children: [
                    { path: '', redirectTo: 'index', pathMatch: 'full' },
                    { path: 'index', component: IndexComponent },
                    { path: 'detail/:id', component: DetailComponent },
                    { path: 'add', component: AddComponent },
                ]
            }
        ]
    }
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