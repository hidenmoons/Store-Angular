import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayaoutComponent } from './/components/layaout/layaout.component';
import { HomeComponent } from './/pages/home/home.component';
import { MyCartComponent } from './/pages/my-cart/my-cart.component';
import { LoginComponent } from './/pages/login/login.component';
import { RegisterComponent } from './/pages/register/register.component';
import { RecoveryComponent } from './/pages/recovery/recovery.component';
import { ProfileComponent } from './/pages/profile/profile.component';
import { ProductDetailComponent } from './/pages/product-detail/product-detail.component';
const routes: Routes = [{
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
      path:':category',
      loadChildren:()=>import('./pages/category/category.module').then(m=>m.CategoryModule)

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
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
