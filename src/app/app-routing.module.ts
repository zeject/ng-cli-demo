import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/admin',
        pathMatch: 'full'
    },
    { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
    { path: 'login', loadChildren: 'app/login/login.module#LoginModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }