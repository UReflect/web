import { NgModule }             from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppComponent }         from './app.component'
import { LayoutComponent }      from './core/layout/containers/layout.component'

const mainRoutes: Routes = [
]

@NgModule({
  imports: [
    RouterModule.forRoot(mainRoutes, { enableTracing: false })
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule {
}
