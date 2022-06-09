import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayaoutComponent } from './website/components/layaout/layaout.component';
import { HomeComponent } from './website/pages/home/home.component';
import { NotFoundComponent } from './website/pages/not-found/not-found.component';
import { CategoryComponent } from './website/pages/category/category.component';
import { MyCartComponent } from './website/pages/my-cart/my-cart.component';
import { LoginComponent } from './website/pages/login/login.component';
import { RegisterComponent } from './website/pages/register/register.component';
import { RecoveryComponent } from './website/pages/recovery/recovery.component';
import { ProfileComponent } from './website/pages/profile/profile.component';
import { ProductDetailComponent } from './website/pages/product-detail/product-detail.component';


const routes: Routes = [
  {
    path:'',
    component: LayaoutComponent,
    children: [
      {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
      },
      {
        path:'home',
        component: HomeComponent
      },
      {
        path:'category/:id',
        component: CategoryComponent
      },
      {
        path:'product/:id',
        component: ProductDetailComponent
      }
      ,
      {
      path:'login',
      component: LoginComponent
      },
      {
      path:'register',
      component: RegisterComponent
      },
      {
      path:'mycart',
      component: MyCartComponent
      },
      {
      path:'profile',
      component: ProfileComponent
      },
      {
      path:'recovery',
      component: RecoveryComponent
      },
    ]
  }
  ,
  {
  path:'**',
  component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
