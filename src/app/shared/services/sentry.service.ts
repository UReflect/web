import { ErrorHandler, Injectable } from '@angular/core'
import * as Sentry                  from '@sentry/browser'
import { environment }              from '@env/environment'

/**
 * Integration of Sentry service
 */
@Injectable()
export class SentryService implements ErrorHandler {
  /**
   * Init the Sentry service
   */
  constructor() {
    Sentry.init({
      dsn: environment.sentryDsn
    })
  }

  /**
   * Catch errors and send them to Sentry
   * @param error Catch error
   */
  handleError(error) {
    if (environment.production) {
      Sentry.captureException(error.originalError || error)
      throw error
    }
  }
}
