import { MirrorJoinedGuard } from '@core/mirrors/guards/mirror-joined.guard'
import { MirrorSetUpGuard }  from '@core/mirrors/guards/mirror-set-up.guard'

export * from './mirror-joined.guard'
export * from './mirror-set-up.guard'

/**
 * Exports all guards
 */
export const guards: any[] = [
  MirrorJoinedGuard,
  MirrorSetUpGuard
]
