import { ModuleListComponent }   from '@core/modules/containers/module-list/module-list.component'
import { ModuleDetailComponent } from '@core/modules/containers/module-detail/module-detail.component'

export * from './module-list/module-list.component'
export * from './module-detail/module-detail.component'

export const containers: any[] = [
  ModuleListComponent,
  ModuleDetailComponent
]
