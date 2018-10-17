import { NgModule }          from '@angular/core'
import * as fromServices     from './services'
import * as fromGuards       from './guards'
import { StoreModule }       from '@ngrx/store'
import { reducers, effects } from '@core/users/store'
import { EffectsModule }     from '@ngrx/effects'

@NgModule({
  imports: [
    StoreModule.forFeature('users', reducers),
    EffectsModule.forFeature(effects)
  ],
  exports: [],
  declarations: [],
  providers: [
    ...fromServices.services,
    ...fromGuards.guards
  ]
})
export class UserModule {
}
