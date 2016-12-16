import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCComponent } from './page-c/page-c.component';


const appRoutes: Routes = [
    { path: '', component: PageCComponent },
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