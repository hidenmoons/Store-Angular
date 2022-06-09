import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskComponent } from './pages/task/task.component';
import { GridComponent } from './pages/grid/grid.component';
import { LayaoutComponent } from './components/layaout/layaout.component';

const routes: Routes = [{
  path: '',
  component: LayaoutComponent,
  children: [
    {
      path: '',
      redirectTo: 'grid',
      pathMatch: 'full'
    }
    ,
    {
      path: 'grid',
      component: GridComponent
    },
    {
      path: 'tasks',
      component: TaskComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
