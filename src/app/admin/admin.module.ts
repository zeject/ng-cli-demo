import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AppRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { IndexService } from './index/index.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [IndexService],
  declarations: [AdminComponent, IndexComponent]
})
export class AdminModule { }
