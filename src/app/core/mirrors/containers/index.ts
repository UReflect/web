import { JoinMirrorComponent } from '@core/mirrors/containers/join-mirror/join-mirror.component'
import { SetMirrorComponent }  from '@core/mirrors/containers/set-mirror/set-mirror.component'

export * from './join-mirror/join-mirror.component'
export * from './set-mirror/set-mirror.component'

/**
 * Exports all containers
 */
export const containers: any[] = [
  JoinMirrorComponent,
  SetMirrorComponent
]
