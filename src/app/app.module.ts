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
      name: 'NgRx uReflect Store Devtools',
      logOnly: environment.production
    }),
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
