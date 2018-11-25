import { NgModule }                                                                          from '@angular/core'
import { RouterModule, Routes }                                                              from '@angular/router'
import { JoinMirrorComponent, MirrorEditComponent, MirrorListComponent, SetMirrorComponent } from '@core/mirrors/containers'
import { AuthGuardService }                                                                  from '@core/auth/guards/auth-guard.service'
import { ProfileFirstComponent }                                                             from '@core/profiles/containers'
import { MirrorGuard, MirrorJoinedGuard, MirrorSetUpGuard }                                  from '@core/mirrors/guards'
import { MirrorsGuard }                                                                      from '@core/mirrors/guards/mirrors.guard'

const routes: Routes = [
  {
    path: 'mirrors',
    component: MirrorListComponent,
    canActivate: [
      AuthGuardService,
      MirrorsGuard
    ]
  },
  {
    path: 'mirror/:id/edit',
    component: MirrorEditComponent,
    canActivate: [
      AuthGuardService,
      MirrorGuard
    ]
  },
  {
    path: 'mirror/join',
    component: JoinMirrorComponent,
    canActivate: [
      AuthGuardService
    ]
  },
  {
    path: 'mirror/:id/set',
    component: SetMirrorComponent,
    canActivate: [
      AuthGuardService,
      MirrorJoinedGuard
    ]
  },
  {
    path: 'mirror/:id/profile-first',
    component: ProfileFirstComponent,
    canActivate: [
      AuthGuardService,
      MirrorSetUpGuard
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
export class MirrorRoutingModule {
}
