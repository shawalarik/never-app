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