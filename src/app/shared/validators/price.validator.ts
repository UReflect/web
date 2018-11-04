import { AbstractControl, ValidatorFn } from '@angular/forms'

/**
 * Validator for price inputs
 */
export function priceFormat(): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    const re = /^\d+(?:[.,]\d{1,2})?$/
    if (c.value === '') {
      return null
    }
    if (!re.test(c.value)) {
      return { price: true }
    }
    return null
  }
}
