import { UsersGuard } from '@core/users/guards/users.guard'

export * from './users.guard'

export const guards: any[] = [
  UsersGuard
]
