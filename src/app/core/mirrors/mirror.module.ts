import { NgModule } from '@angular/core'
import { services } from '@core/mirrors/services'

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    ...services
  ]
})
export class MirrorModule {
}
