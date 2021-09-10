import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutletRefModule, ProductListModule } from '@spartacus/storefront';
import { OutletsComponent } from './outlets.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OutletRefModule,
    ProductListModule
  ],
  exports:[OutletsComponent]

})
export class OutletsModule { }
