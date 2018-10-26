import { NgModule }          from '@angular/core'
import { InterceptorModule } from '@shared/interceptors/interceptor.module'

@NgModule({
  imports: [
    InterceptorModule
  ],
  exports: [
    InterceptorModule
  ],
  declarations: [],
  providers: []
})
export class SharedModule {
}
