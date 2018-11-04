import { ModuleListComponent }   from '@core/modules/containers/module-list/module-list.component'
import { ModuleDetailComponent } from '@core/modules/containers/module-detail/module-detail.component'
import { ModuleNewComponent }    from '@core/modules/containers/module-new/module-new.component'
import { ModuleEditComponent }   from '@core/modules/containers/module-edit/module-edit.component'

export * from './module-list/module-list.component'
export * from './module-detail/module-detail.component'
export * from './module-new/module-new.component'
export * from './module-edit/module-edit.component'

export const containers: any[] = [
  ModuleListComponent,
  ModuleDetailComponent,
  ModuleNewComponent,
  ModuleEditComponent
]
