import { NgModule }      from '@angular/core'
import { LayoutModule }  from './layout/layout.module'
import { AuthModule }    from '@core/auth/auth.module'
import { ModuleModule }  from '@core/modules/module.module'
import { UserModule }    from '@core/users/user.module'
import { CommentModule } from '@core/comments/comment.module'
import { ProfileModule } from '@core/profiles/profile.module'
import { MirrorModule }  from '@core/mirrors/mirror.module'

@NgModule({
  imports: [
    LayoutModule,
    AuthModule,
    ModuleModule,
    UserModule,
    CommentModule,
    ProfileModule,
    MirrorModule
  ],
  exports: [
    LayoutModule,
    AuthModule,
    ModuleModule,
    UserModule,
    CommentModule,
    ProfileModule,
    MirrorModule
  ],
  declarations: [],
  providers: []
})
export class CoreModule {
}
