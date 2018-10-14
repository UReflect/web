import { NgModule }     from '@angular/core'
import { LayoutModule } from './layout/layout.module'
import { AuthModule }   from '@core/auth/auth.module'
import { ModuleModule } from '@core/modules/module.module'
import { UserModule }   from '@core/user/user.module'

@NgModule({
  imports: [
    LayoutModule,
    AuthModule,
    ModuleModule,
    UserModule
  ],
  exports: [
    LayoutModule,
    AuthModule,
    ModuleModule,
    UserModule
  ],
  declarations: [],
  providers: []
})
export class CoreModule {
}
