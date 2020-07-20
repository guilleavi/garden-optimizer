import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: 'garden',
    loadChildren: () => import('./garden/garden.module').then(m => m.GardenModule)
  },
  {
    path: '**',
    redirectTo: 'garden'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
