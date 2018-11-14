import { JoinMirrorComponent } from '@core/mirrors/containers/join-mirror/join-mirror.component'
import { SetMirrorComponent }  from '@core/mirrors/containers/set-mirror/set-mirror.component'
import { MirrorListComponent } from '@core/mirrors/containers/mirror-list/mirror-list.component'

export * from './join-mirror/join-mirror.component'
export * from './set-mirror/set-mirror.component'
export * from './mirror-list/mirror-list.component'

/**
 * Exports all containers
 */
export const containers: any[] = [
  JoinMirrorComponent,
  SetMirrorComponent,
  MirrorListComponent
]
