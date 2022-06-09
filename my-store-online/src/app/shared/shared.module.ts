import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './/components/product/product.component';
import { ProductsComponent } from './/components/products/products.component';
import { ReversePipe } from './/pipes/reverse.pipe';
import { TimeagoPipe } from './/pipes/timeago.pipe';


@NgModule({
  declarations: [
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    ReversePipe,
    TimeagoPipe,
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports:[
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    ReversePipe,
    TimeagoPipe,
  ]
})
export class SharedModule { }
