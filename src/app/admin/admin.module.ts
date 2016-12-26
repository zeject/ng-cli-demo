import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AppRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index/list/index.component';
import { IndexService } from './index/index.service';
import { HttpModule } from '@angular/http';

import { PaginationModule } from 'ng2-bootstrap';
import { DetailComponent } from './index/detail/detail.component';
import { SplitPipe } from './split.pipe';
import { AddComponent } from './index/add/add.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    PaginationModule.forRoot()
  ],
  providers: [IndexService],
  declarations: [
    AdminComponent,
    IndexComponent,
    DetailComponent,
    DetailComponent,
    SplitPipe,
    AddComponent
  ]
})
export class AdminModule { }
