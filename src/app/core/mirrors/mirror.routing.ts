import { NgModule }                                                     from '@angular/core'
import { RouterModule, Routes }                                         from '@angular/router'
import { JoinMirrorComponent, MirrorListComponent, SetMirrorComponent } from '@core/mirrors/containers'
import { AuthGuardService }                                             from '@core/auth/guards/auth-guard.service'
import { FirstProfileComponent }                                        from '@core/profiles/containers'
import { MirrorJoinedGuard, MirrorSetUpGuard }                          from '@core/mirrors/guards'
import { MirrorsGuard }                                                 from '@core/mirrors/guards/mirrors.guard'

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
    path: 'mirror/:id/first-profile',
    component: FirstProfileComponent,
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
