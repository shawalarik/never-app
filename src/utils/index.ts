import type { App, FunctionalComponent } from "vue";

import { isObject } from "./is";
const docEle = document.documentElement;
/**
 * 深度合并对象
 * @param src 
 * @param target 
 */
export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
    let key: string;
    for (key in target) {
      src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key]);
    }
    return src;
}
/**
 * 全局更改样式
 * @param prop 
 * @param val 
 * @param dom 
 */
export function setCssVar(prop: string, val: any, dom = docEle) {
  dom.style.setProperty(prop, val);
}

export const withInstall = <T>(component: FunctionalComponent<any, any>, alias?: string) => {
  const comp = component as any;
  comp.install = (app: App) => {
    app.component(comp.name || comp.displayName, component);
    if (alias) {
      app.config.globalProperties[alias] = component;
    }
  };
  return component as T & Plugin;
};
