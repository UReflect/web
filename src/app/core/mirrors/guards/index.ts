import { MirrorJoinedGuard } from '@core/mirrors/guards/mirror-joined.guard'
import { MirrorSetUpGuard }  from '@core/mirrors/guards/mirror-set-up.guard'
import { MirrorsGuard }      from '@core/mirrors/guards/mirrors.guard'
import { MirrorGuard }       from '@core/mirrors/guards/mirror.guard'

export * from './mirror-joined.guard'
export * from './mirror-set-up.guard'
export * from './mirrors.guard'
export * from './mirror.guard'

/**
 * Exports all guards
 */
export const guards: any[] = [
  MirrorJoinedGuard,
  MirrorSetUpGuard,
  MirrorsGuard,
  MirrorGuard
]
