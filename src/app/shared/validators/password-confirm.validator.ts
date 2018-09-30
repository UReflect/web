import { AbstractControl, ValidatorFn } from '@angular/forms'

export function passwordConfirm(password: AbstractControl): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    return c.value !== password.value ? { match: true } : null
  }
}
