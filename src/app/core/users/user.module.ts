import { NgModule }          from '@angular/core'
import { StoreModule }       from '@ngrx/store'
import { reducers, effects } from './store'
import { EffectsModule }     from '@ngrx/effects'
import { CommonModule }      from '@angular/common'
import { services }          from './services'
import { guards }            from './guards'

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('users', reducers),
    EffectsModule.forFeature(effects)
  ],
  exports: [],
  declarations: [],
  providers: [
    ...services,
    ...guards
  ]
})
export class UserModule {
}
