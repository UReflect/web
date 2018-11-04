import { ErrorHandler, Injectable } from '@angular/core'
import * as Sentry                  from '@sentry/browser'
import { environment }              from '@env/environment'

@Injectable()
export class SentryService implements ErrorHandler {
  constructor() {
    Sentry.init({
      dsn: 'https://d3063663ac374a60914a3dfb9c3835fb@sentry.io/1315508'
    })
  }

  handleError(error) {
    if (environment.production) {
      Sentry.captureException(error.originalError || error)
      throw error
    }
  }
}
