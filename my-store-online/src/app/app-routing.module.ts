import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
<<<<<<< HEAD
import {QuicklinkStrategy } from 'ngx-quicklink';
=======
import { CustomPreloadService } from './services/custom-preload.service';
import { QuicklinkStrategy } from 'ngx-quicklink';
>>>>>>> origin/master

const routes: Routes = [
  
  {
    path:'cms',
    loadChildren:()=>import('./cms/cms.module').then(m=>m.CmsModule),
    data:{
      preload:true,
    }
  },
  {
    path:'',
    loadChildren:()=>import('./website/website.module').then(m=>m.WebsiteModule)
  }
  ,
  {
  path:'**',
  component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
<<<<<<< HEAD
    preloadingStrategy:QuicklinkStrategy
=======
    preloadingStrategy: QuicklinkStrategy
>>>>>>> origin/master
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
