import { AbstractControl, ValidatorFn } from '@angular/forms'

/**
 * Validator for password confirmations
 * Check if passwords match
 * @param password Provided password used to check id confirmation password marches
 */
export function passwordConfirm(password: AbstractControl): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    return c.value !== password.value ? { match: true } : null
  }
}
