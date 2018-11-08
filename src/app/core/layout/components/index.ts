import { HeaderComponent }      from '@core/layout/components/header/header.component'
import { SidebarUserComponent } from '@core/layout/components/sidebar-user/sidebar-user.component'
import { SidebarLogoComponent } from '@core/layout/components/sidebar-logo/sidebar-logo.component'
import { SidenavComponent }     from '@core/layout/components/sidenav/sidenav.component'

export * from './header/header.component'
export * from './sidebar-logo/sidebar-logo.component'
export * from './sidebar-user/sidebar-user.component'
export * from './sidenav/sidenav.component'

/**
 * Exports all components
 */
export const components: any[] = [
  HeaderComponent,
  SidebarUserComponent,
  SidebarLogoComponent,
  SidenavComponent
]
