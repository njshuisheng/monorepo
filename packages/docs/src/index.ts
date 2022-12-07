import { isArray } from '@monorepo/shared'

export function concat<T>(arr1: T[], arr2: T[]) {
  if (isArray(arr1) && isArray(arr2)) {
    return arr1.concat(arr2)
  } else {
    return []
  }
}

export function toUpper(str: string) {
  return str.toLocaleUpperCase()
}

export function isString<T>(value: T) {
  return typeof value === 'string'
}
