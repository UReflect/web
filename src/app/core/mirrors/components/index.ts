import { NumpadComponent }     from '@core/mirrors/components/numpad/numpad.component'
import { MirrorFormComponent } from '@core/mirrors/components/mirror-form/mirror-form.component'

export * from './numpad/numpad.component'
export * from './mirror-form/mirror-form.component'

/**
 * Export all components
 */
export const components: any[] = [
  NumpadComponent,
  MirrorFormComponent
]
