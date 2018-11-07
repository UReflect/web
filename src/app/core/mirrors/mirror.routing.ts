import { NgModule }                                from '@angular/core'
import { RouterModule, Routes }                    from '@angular/router'
import { JoinMirrorComponent, SetMirrorComponent } from '@core/mirrors/containers'
import { AuthGuardService }                        from '@core/auth/guards/auth-guard.service'

const routes: Routes = [
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
      AuthGuardService
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
