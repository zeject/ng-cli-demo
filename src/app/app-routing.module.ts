import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAComponent } from './page-a/page-a.component';
import { PageBComponent } from './page-b/page-b.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/a',
        pathMatch: 'full'
    },
    { path: 'a', component: PageAComponent },
    { path: 'b', component: PageBComponent },
    { path: 'c', loadChildren: 'app/child/child.module#ChildModule' },
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