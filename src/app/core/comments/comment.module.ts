import { NgModule }          from '@angular/core'
import { StoreModule }       from '@ngrx/store'
import { EffectsModule }     from '@ngrx/effects'
import { reducers, effects } from './store'
import { components }        from '@core/comments/components'
import { containers }        from '@core/comments/containers'
import { guards }            from '@core/comments/guards'
import { services }          from '@core/comments/services'
import { CommonModule }      from '@angular/common'

@NgModule({
  imports: [
    StoreModule.forFeature('comments', reducers),
    EffectsModule.forFeature(effects),
    CommonModule
  ],
  exports: [
    ...components,
    ...containers
  ],
  declarations: [
    ...components,
    ...containers
  ],
  providers: [
    ...guards,
    ...services
  ]
})
export class CommentModule {
}
