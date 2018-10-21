import { NgModule }             from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuardService }     from '@core/auth/guards/auth-guard.service'
import * as fromContainer       from './containers'
import * as fromGuards          from './guards'
import * as fromUserGuards      from '@core/users/guards'
import * as fromServices        from './services'
import * as fromCommentGuards   from '@core/comments/guards/comments.guard'

const routes: Routes = [
  {
    path: 'modules',
    component: fromContainer.ModuleListComponent,
    canActivate: [
      AuthGuardService,
      fromGuards.ModulesGuard,
      fromUserGuards.UsersGuard
    ]
  },
  {
    path: 'module/:id',
    component: fromContainer.ModuleDetailComponent,
    canActivate: [
      AuthGuardService,
      fromGuards.ModuleGuard,
      fromUserGuards.UsersGuard,
      fromCommentGuards.CommentsGuard
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
