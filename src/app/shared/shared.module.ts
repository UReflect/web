import { NgModule }                      from '@angular/core'
import { InterceptorModule }             from '@shared/interceptors/interceptor.module'
import { services }                      from '@shared/services'
import { components, componentServices } from '@shared/components'
import { CommonModule }                  from '@angular/common'

@NgModule({
  imports: [
    CommonModule,
    InterceptorModule
  ],
  exports: [
    InterceptorModule,
    ...components
  ],
  declarations: [
    ...components
  ],
  providers: [
    ...services,
    ...componentServices
  ]
})
export class SharedModule {
}
