import { NumpadComponent } from '@shared/components/numpad/numpad.component'
import { NumpadService }   from '@shared/components/numpad/numpad.service'

export * from './numpad/numpad.component'
export * from './numpad/numpad.service'

/**
 * Exports all components
 */
export const components: any[] = [
  NumpadComponent
]

/**
 * Exports all components related services
 */
export const componentServices: any[] = [
  NumpadService
]
