import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainTemplateComponent} from "./template/main-template/main-template.component";

const routes: Routes = [
  // Test page
  {
    path: 'test',
    component: MainTemplateComponent,
    loadChildren: () => import('./features/test-page/test-page.module').then(m => m.TestPageModule),
  },
  {
    path: '',
    redirectTo: 'test',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'test'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
