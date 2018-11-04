import { AbstractControl, ValidatorFn } from '@angular/forms'
import { environment }                  from '@env/environment'

/**
 * Validator for password inputs
 * Check password strength
 */
export function passwordStrength(): ValidatorFn {
  return (c: AbstractControl): { [key: string]: any } | null => {
    if (!environment.production) {
      return null
    }
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{16,})/
    return !re.test(c.value) ? { strength: true } : null
  }
}
