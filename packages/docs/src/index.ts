import { isArray } from 'shared'

export function concat(arr1: any[], arr2: any[]) {
    if (isArray(arr1) && isArray(arr2)) {
        return arr1.concat(arr2)
    } else {
        return []
    }
}

export function toUpper(str: string) {
    return str.toLocaleUpperCase()
}

export function isString(value: any) {
    return typeof value === 'string'
}