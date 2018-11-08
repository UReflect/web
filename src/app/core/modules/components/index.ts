import { ModuleListCardComponent }       from '@core/modules/components/module-list-card/module-list-card.component'
import { ModuleDetailHeaderComponent }   from '@core/modules/components/module-detail-header/module-detail-header.component'
import { ModuleDetailPicturesComponent } from '@core/modules/components/module-detail-pictures/module-detail-pictures.component'
import { ModuleDetailTagsComponent }     from '@core/modules/components/module-detail-tags/module-detail-tags.component'
import { ModuleStarsComponent }          from '@core/modules/components/module-stars/module-stars.component'
import { ModuleFormComponent }           from '@core/modules/components/module-form/module-form.component'

export * from './module-list-card/module-list-card.component'
export * from './module-detail-header/module-detail-header.component'
export * from './module-detail-pictures/module-detail-pictures.component'
export * from './module-detail-tags/module-detail-tags.component'
export * from './module-stars/module-stars.component'
export * from './module-form/module-form.component'

/**
 * Exports all components
 */
export const components: any[] = [
  ModuleListCardComponent,
  ModuleDetailHeaderComponent,
  ModuleDetailPicturesComponent,
  ModuleDetailTagsComponent,
  ModuleStarsComponent,
  ModuleFormComponent
]
