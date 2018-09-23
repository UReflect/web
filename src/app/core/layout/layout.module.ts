import { NgModule }             from '@angular/core'
import { SidebarLogoComponent } from './components/sidebar-logo.component'
import { LayoutComponent }      from './containers/layout.component'
import { RouterModule }         from '@angular/router'
import { SidebarUserComponent } from './components/sidebar-user.component'
import { SidenavComponent }     from './components/sidenav.component'
import { HeaderComponent }      from './components/header.component'
import { CommonModule }         from '@angular/common'

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
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
