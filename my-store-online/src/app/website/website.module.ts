import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { ImgComponent } from '../shared/components/img/img.component';
import { SharedModule } from '../shared/shared.module';
import { NavComponent } from './/components/nav/nav.component';
import { SwiperComponent, SwiperModule } from 'swiper/angular';

import { HighlightDirective } from '../shared/directives/highlight.directive';
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
    NavComponent,
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
    SharedModule,
    SwiperModule
    
  ]
})
export class WebsiteModule { }
