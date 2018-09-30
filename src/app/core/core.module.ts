import { NgModule }     from '@angular/core'
import { LayoutModule } from './layout/layout.module'
import { AuthModule }   from '@core/auth/auth.module'
import { ModuleModule } from '@core/modules/module.module'

@NgModule({
  imports: [
    LayoutModule,
    AuthModule,
    ModuleModule
  ],
  exports: [
    LayoutModule,
    AuthModule,
    ModuleModule
  ],
  declarations: [],
  providers: []
})
export class CoreModule {
}
