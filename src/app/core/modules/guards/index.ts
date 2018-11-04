import { ModulesGuard }     from './modules.guard'
import { ModuleGuard }      from './module.guard'
import { ModuleOwnerGuard } from '@core/modules/guards/module-owner.guard'

export * from './modules.guard'
export * from './module.guard'
export * from './module-owner.guard'

export const guards: any[] = [
  ModulesGuard,
  ModuleGuard,
  ModuleOwnerGuard
]
