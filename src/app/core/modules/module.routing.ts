import { NgModule }                                    from '@angular/core'
import { RouterModule, Routes }                        from '@angular/router'
import { AuthGuardService }                            from '@core/auth/guards/auth-guard.service'
import * as fromContainer                              from './containers'
import { ModuleGuard, ModuleOwnerGuard, ModulesGuard } from './guards'
import { UsersGuard }                                  from '@core/users/guards'
import { CommentsGuard }                               from '@core/comments/guards'

const routes: Routes = [
  {
    path: 'modules/mine',
    component: fromContainer.ModuleListComponent,
    canActivate: [
      AuthGuardService,
      ModulesGuard,
      UsersGuard
    ]
  },
  {
    path: 'modules',
    component: fromContainer.ModuleListComponent,
    canActivate: [
      AuthGuardService,
      ModulesGuard,
      UsersGuard
    ]
  },
  {
    path: 'module/new',
    component: fromContainer.ModuleNewComponent,
    canActivate: [
      AuthGuardService
    ]
  },
  {
    path: 'module/:id/edit',
    component: fromContainer.ModuleEditComponent,
    canActivate: [
      AuthGuardService,
      ModuleOwnerGuard
    ]
  },
  {
    path: 'module/:id',
    component: fromContainer.ModuleDetailComponent,
    canActivate: [
      AuthGuardService,
      ModuleGuard,
      UsersGuard,
      CommentsGuard
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
  providers: []
})
export class ModuleRoutingModule {
}
