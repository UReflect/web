import { NgModule }      from '@angular/core'
import * as fromServices from './services'

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    { ...fromServices.services }
  ]
})
export class UserModule {
}
