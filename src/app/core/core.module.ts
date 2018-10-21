import { NgModule }      from '@angular/core'
import { LayoutModule }  from './layout/layout.module'
import { AuthModule }    from '@core/auth/auth.module'
import { ModuleModule }  from '@core/modules/module.module'
import { UserModule }    from '@core/users/user.module'
import { CommentModule } from '@core/comments/comment.module'

@NgModule({
  imports: [
    LayoutModule,
    AuthModule,
    ModuleModule,
    UserModule,
    CommentModule
  ],
  exports: [
    LayoutModule,
    AuthModule,
    ModuleModule,
    UserModule,
    CommentModule
  ],
  declarations: [],
  providers: []
})
export class CoreModule {
}
