import { NgModule }          from '@angular/core'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthInterceptor }   from '@shared/interceptors/auth.interceptor'

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class InterceptorModule {
}
