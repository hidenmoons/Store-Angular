import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperComponent, SwiperModule } from 'swiper/angular';

import { WebsiteRoutingModule } from './website-routing.module';
import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './/components/product/product.component';
import { ProductsComponent } from './/components/products/products.component';
import { NavComponent } from './/components/nav/nav.component';
import { ReversePipe } from './/pipes/reverse.pipe';
import { TimeagoPipe } from './/pipes/timeago.pipe';
import { HighlightDirective } from './/directives/highlight.directive';
import { HomeComponent } from './/pages/home/home.component';
import { CategoryComponent } from './/pages/category/category.component';
import { MyCartComponent } from './/pages/my-cart/my-cart.component';
import { LoginComponent } from './/pages/login/login.component';
import { RegisterComponent } from './/pages/register/register.component';
import { RecoveryComponent } from './/pages/recovery/recovery.component';
import { ProfileComponent } from './/pages/profile/profile.component';
import { ProductDetailComponent } from './/pages/product-detail/product-detail.component';
import { LayaoutComponent } from './/components/layaout/layaout.component';

@NgModule({
  declarations: [
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    NavComponent,
    ReversePipe,
    TimeagoPipe,
    HighlightDirective,
    HomeComponent,
    CategoryComponent,
    MyCartComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    ProfileComponent,
    ProductDetailComponent,
    LayaoutComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SwiperModule
    
  ]
})
export class WebsiteModule { }
