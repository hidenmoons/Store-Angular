import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import {QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
  
  {
    path:'cms',
    loadChildren:()=>import('./cms/cms.module').then(m=>m.CmsModule)
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
    preloadingStrategy:QuicklinkStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
