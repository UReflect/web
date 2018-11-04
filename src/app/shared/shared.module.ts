import { NgModule }          from '@angular/core'
import { InterceptorModule } from '@shared/interceptors/interceptor.module'
import { services }          from '@shared/services'

@NgModule({
  imports: [
    InterceptorModule
  ],
  exports: [
    InterceptorModule
  ],
  declarations: [],
  providers: [
    ...services
  ]
})
export class SharedModule {
}
