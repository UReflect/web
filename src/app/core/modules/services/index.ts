import { ModuleService }   from '@core/modules/services/module.service'
import { ManifestService } from '@core/modules/services/manifest.service'

export * from './module.service'
export * from './manifest.service'

export const services: any[] = [
  ModuleService,
  ManifestService
]
