import { ModulesGuard } from './modules.guard'
import { ModuleGuard }  from './module.guard'

export * from './modules.guard'
export * from './module.guard'

export const guards: any[] = [
  ModulesGuard,
  ModuleGuard
]
