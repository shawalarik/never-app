import { defineStore } from "pinia"
import { stores } from "~/stores";

/**
 * @param appThemeBgColor 系统主题色
 */
export interface ThemeState {
    /**
     * 系统主题色
     */
    appThemeBgColor: string;
    [propName: string]: any
}
export const useAppThemeStore = defineStore({
    id: 'app-theme',
    persist: true, 
    state: (): ThemeState => ({
        appThemeBgColor: '#ffffff',
    }),
    getters: {
        /**
         * 返回存储的系统主题色
         */
        getAppThemeColor(): any {
            return this.appThemeBgColor || '';
        },
    },
    /**
     * 支持异步操作
     */
    actions: {
        /**
         *  设置当前系统主题色
         * @param info 
         */
        setThemeBgColor(color: string) {
            this.appThemeBgColor = color ? color : '';
        },
        
        /**
         * 可异步操作
         */
        async asyncSetThemeBgColor(color?: any) {
            // 可从远程获取系统主题色
        }
    }
})

/**
 * 需要在设置之外使用
 * @returns 返回系统主题色状态池实例
 */
export function useAppThemeStoreWithOut() {
    return useAppThemeStore(stores);
}