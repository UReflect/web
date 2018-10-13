import { NgModule }             from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuardService }     from '@core/auth/guards/auth-guard.service'
import * as fromContainer       from './containers'
import * as fromGuards          from './guards'
import * as fromServices        from './services'

const routes: Routes = [
  {
    path: 'modules',
    component: fromContainer.ModuleListComponent,
    canActivate: [
      AuthGuardService,
      fromGuards.ModulesGuard
    ]
  },
  {
    path: 'module/:id',
    component: fromContainer.ModuleDetailComponent,
    canActivate: [
      AuthGuardService,
      fromGuards.ModuleGuard
    ]
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
  providers: [
    ...fromServices.services,
    ...fromGuards.guards
  ]
})
export class ModuleRoutingModule {
}
