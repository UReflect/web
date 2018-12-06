import { AbstractControl, ValidatorFn } from '@angular/forms'

/**
 * Validator for ZIP upload inputs
 * Check if ZIP name is formatted according to the documentation
 */
export function moduleZipName(): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    const re = new RegExp(/^([\w-]{1,50})\.v([\d]+)-([\d]+)\.zip$/)
    if (c.value === '') {
      return null
    }
    if (!re.test(c.value)) {
      return { name: true }
    }
    return null
  }
}
