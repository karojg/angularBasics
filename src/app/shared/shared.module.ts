import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BarComponent } from './../shared/bar/bar.component';



@NgModule({
  declarations: [
    BarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    FormsModule,
    BarComponent
  ]
})
export class SharedModule { }
