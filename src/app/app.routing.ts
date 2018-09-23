import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const mainRoutes: Routes = [
  {}
];

@NgModule({
  imports: [
    RouterModule.forRoot(mainRoutes, {enableTracing: false})
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule {
}
