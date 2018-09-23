import { NgModule }     from '@angular/core'
import { LayoutModule } from './layout/layout.module'
import { AuthModule }   from '@core/auth/auth.module'

@NgModule({
  imports: [
    LayoutModule,
    AuthModule
  ],
  exports: [
    LayoutModule,
    AuthModule
  ],
  declarations: [],
  providers: []
})
export class CoreModule {
}
