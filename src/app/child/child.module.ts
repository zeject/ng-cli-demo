import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child.component';
import { PageCComponent } from './page-c/page-c.component';
import { ChildRoutingModule } from './child-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ChildRoutingModule
  ],
  declarations: [ChildComponent, PageCComponent]
})
export class ChildModule { }
