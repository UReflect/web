import { NgModule }             from '@angular/core'
import { SidebarLogoComponent } from './components/sidebar-logo/sidebar-logo.component'
import { LayoutComponent }      from './containers/layout.component'
import { RouterModule }         from '@angular/router'
import { SidebarUserComponent } from './components/sidebar-user/sidebar-user.component'
import { SidenavComponent }     from './components/sidenav/sidenav.component'
import { HeaderComponent }      from './components/header/header.component'
import { CommonModule }         from '@angular/common'

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarLogoComponent,
    SidebarUserComponent,
    SidenavComponent,
    HeaderComponent,
    LayoutComponent
  ],
  declarations: [
    SidebarLogoComponent,
    SidebarUserComponent,
    SidenavComponent,
    HeaderComponent,
    LayoutComponent
  ],
  providers: []
})
export class LayoutModule {
}
