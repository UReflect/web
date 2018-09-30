import { NgModule }             from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ModuleListComponent }  from '@core/modules/containers/module-list.component'
import { AuthGuardService }     from '@core/auth/services/auth-guard.service'

const routes: Routes = [
  {
    path: 'modules',
    component: ModuleListComponent,
    canActivate: [AuthGuardService]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: []
})
export class ModuleRoutingModule {
}
