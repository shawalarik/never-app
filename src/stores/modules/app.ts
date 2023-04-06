import type { HeaderSetting, MenuSetting, MultiTabsSetting, ProjectConfig, TransitionSetting } from "~/types/config";

import type { BeforeMiniState } from "~/types/store";
import type { ThemeEnum } from "~/enums/appEnum";
import { darkMode } from "~/settings/designSetting";
import { deepMerge } from '~/utils';
import { defineStore } from "pinia";
import { stores } from "~/stores";

interface AppState {
    /**
     * 系统主题
     */
    darkMode?: ThemeEnum;
    /**
     * 页面加载状态
     */
    pageLoading: boolean;
    /**
     * 系统配置
     */
    projectConfig: ProjectConfig | null;
    /**
     * 当窗口缩小时，记住一些状态，并在恢复窗口时恢复这些状态
     */
    beforeMiniInfo: BeforeMiniState;
}

let timeId: TimeoutHandle;

export const useAppStore = defineStore({
    // 当前store 的唯一 id(type: string)
    id: 'app',
    persist: true, // 无论何时更改，都会将整个状态发送到本地存储(type: boolean)
    state: (): AppState => ({
        /**
         * 系统主题
         */
        darkMode: undefined,
        /**
         * 页面加载状态
         */
        pageLoading: false,
        /**
         * 系统配置
         */
        projectConfig: null,
        /**
         * 当窗口缩小时，记住一些状态，并在恢复窗口时恢复这些状态
         */
        beforeMiniInfo: {},
    }),
    getters: {
        /**
         * 读取
         * @returns 返回页面加载状态
         */
        getPageLoading(): boolean {
            return this.pageLoading;
        },

        /**
         * 读取
         * @returns 返回系统主题
         */
        getDarkMode(): 'light' | 'dark' | string {
            return this.darkMode || darkMode;
        },

        /**
         * 读取
         * @returns 返回窗口缩小前存储的部分信息
         */
        getBeforeMiniInfo(): BeforeMiniState {
            return this.beforeMiniInfo;
        },

        /**
         * 读取
         * @returns 返回系统配置
         */
        getProjectConfig(): ProjectConfig {
            return this.projectConfig || ({} as ProjectConfig);
        },

        /**
         * 读取
         * @returns 返回系统配置 => 头部配置
         */
        getHeaderSetting(): HeaderSetting {
            return this.getProjectConfig.headerSetting;
        },

        /**
         * 读取
         * @returns 返回系统配置 => 菜单配置
         */
        getMenuSetting(): MenuSetting {
            return this.getProjectConfig.menuSetting;
        },

        /**
         * 读取
         * @returns 返回系统配置 => 动画配置
         */
        getTransitionSetting(): TransitionSetting {
            return this.getProjectConfig.transitionSetting;
        },

        /**
         * 读取
         * @returns 返回系统配置 => 多标签设置
         */
        getMultiTabsSetting(): MultiTabsSetting {
            return this.getProjectConfig.multiTabsSetting;
        },
    },
    actions: {
        /**
         * 写入
         * @param loading 设置页面加载状态
         */
        setPageLoading(loading: boolean): void {
            this.pageLoading = loading;
        },

        /**
         * 写入
         * @param mode 设置系统主题
         */
        setDarkMode(mode: ThemeEnum): void {
            this.darkMode = mode;
        },

        /**
         * 写入是否窗口变化
         * @param state 当窗口缩小时，记住一些状态，并在恢复窗口时恢复这些状态
         */
        setBeforeMiniInfo(state: BeforeMiniState): void {
            this.beforeMiniInfo = state;
        },

        /**
         * 写入系统配置
         * @param config 系统配置
         */
        setProjectConfig(config: DeepPartial<ProjectConfig>) {
            this.projectConfig = deepMerge(this.projectConfig || {}, config);;
        },

        /**
         * 1、重置路由器
         * 2、清除所有缓存信息
         */
        async resetAllState() {
            // resetRouter();
        },

        /**
         * 写入页面加载状态，并处理闪烁问题
         * @param loading 
         */
        async setPageLoadingAction(loading: boolean): Promise<void> {
            if (loading) {
                clearTimeout(timeId);
                // 防止闪烁
                timeId = setTimeout(() => {
                    this.setPageLoading(loading);
                }, 50);
            } else {
                this.setPageLoading(loading);
                clearTimeout(timeId);
            }
        }
    }
})

/**
 * 需要在设置之外使用
 * @returns 返回系统状态池实例
 */
export function useAppStoreWithOut() {
    return useAppStore(stores);
}