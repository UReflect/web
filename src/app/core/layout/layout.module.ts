import { NgModule }     from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { StoreModule }  from '@ngrx/store'
import { reducers }     from './store/reducers'
import { components }   from '@core/layout/components'
import { containers }   from '@core/layout/containers'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('layout', reducers)
  ],
  exports: [
    ...components,
    ...containers
  ],
  declarations: [
    ...components,
    ...containers
  ],
  providers: []
})
export class LayoutModule {
}
