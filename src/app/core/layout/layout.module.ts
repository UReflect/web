import { NgModule }             from '@angular/core'
import { SidebarLogoComponent } from './components/sidebar-logo/sidebar-logo.component'
import { LayoutComponent }      from './containers/layout.component'
import { RouterModule }         from '@angular/router'
import { SidebarUserComponent } from './components/sidebar-user/sidebar-user.component'
import { SidenavComponent }     from './components/sidenav/sidenav.component'
import { HeaderComponent }      from './components/header/header.component'
import { CommonModule }         from '@angular/common'
import { StoreModule }          from '@ngrx/store'
import { reducers }             from './store/reducers'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('layout', reducers)
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
