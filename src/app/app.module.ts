import { BrowserModule }                                      from '@angular/platform-browser'
import { NgModule }                                           from '@angular/core'
import { AppComponent }                                       from './app.component'
import { AppRoutingModule }                                   from './app.routing'
import { CoreModule }                                         from './core/core.module'
import { StoreModule }                                        from '@ngrx/store'
import { metaReducers, reducers, CustomSerializer, effects }  from './store'
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store'
import { StoreDevtoolsModule }                                from '@ngrx/store-devtools'
import { environment }                                        from '@env/environment'
import { HttpClientModule }                                   from '@angular/common/http'
import { LayoutModule }                                       from '@core/layout/layout.module'
import { EffectsModule }                                      from '@ngrx/effects'

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
      name: 'NgRx uReflect Devtools',
      logOnly: environment.production
    }),
    EffectsModule.forRoot(effects),
    CoreModule,
    HttpClientModule,
    LayoutModule
  ],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
