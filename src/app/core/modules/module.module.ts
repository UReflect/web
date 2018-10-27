import { NgModule }                         from '@angular/core'
import { ModuleRoutingModule }              from '@core/modules/module.routing'
import { CommonModule }                     from '@angular/common'
import { StoreModule }                      from '@ngrx/store'
import { reducers, effects }                from './store'
import { EffectsModule }                    from '@ngrx/effects'
import { components }                       from '@core/modules/components'
import { containers }                       from '@core/modules/containers'
import { services }                         from '@core/modules/services'
import { guards }                           from '@core/modules/guards'
import { CommentModule }                    from '@core/comments/comment.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    ModuleRoutingModule,
    StoreModule.forFeature('modules', reducers),
    EffectsModule.forFeature(effects),
    CommentModule,
    FormsModule,
    ReactiveFormsModule
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
export class ModuleModule {
}
