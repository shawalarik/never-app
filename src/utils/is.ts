export function is(val: unknown, type: string) {
    return toString.call(val) === `[object ${type}]`;
}

/**
 * 判断是否为对象
 * @param val 传入的值
 * @returns 
 */
export function isObject(val: any): val is Record<any, any> {
    return val !== null && is(val, 'Object');
}

/**
 * 判断是否为字符串
 * @param val 
 * @returns 
 */
export function isString(val: unknown): val is string {
    return is(val, 'String');
}