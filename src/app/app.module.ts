import { BrowserModule }               from '@angular/platform-browser'
import { NgModule }                    from '@angular/core'
import { AppComponent }                from './app.component'
import { AppRoutingModule }            from './app.routing'
import { CoreModule }                  from './core/core.module'
import { StoreModule }                 from '@ngrx/store'
import { metaReducers, reducers }      from './reducers'
import { StoreRouterConnectingModule } from '@ngrx/router-store'
import { StoreDevtoolsModule }         from '@ngrx/store-devtools'
import { environment }                 from '@env/environment'
import { HttpClientModule }            from '@angular/common/http'
import { LayoutModule }                from '@core/layout/layout.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router'
    }),
    StoreDevtoolsModule.instrument({
      name: 'NgRx uReflect StoreLoggedUser Devtools',
      logOnly: environment.production
    }),
    CoreModule,
    HttpClientModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
