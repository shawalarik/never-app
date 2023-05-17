import type { GetUserInfoModel } from "~/api/model/userModel";
import type { RoleEnum } from "~/enums/roleEnum";
import type { UserInfo } from "~/types/store";
import { defineStore } from "pinia"
import router from "~/router";
import { stores } from "~/stores";

/**
 * @param userInfo 登录用户信息
 * @param token 用户登录token
 * @param roleList 角色权限列表
 * @param sessionTimeout 登录信息是否过期
 * @param lastUpdateTime 最近一次登录时间（时间戳）
 */
export interface UserState {
    /**
     * 登录用户信息
     */
    userInfo: Nullable<UserInfo>;
    /**
     * 用户登录token
     */
    token?: string | number;
    /**
     * 角色权限列表
     */
    roleList?: RoleEnum[];
    /**
     * 登录信息是否过期
     */
    sessionTimeout?: boolean;
    /**
     * 最近一次登录时间（时间戳）
     */
    lastUpdateTime?: number;
    // [propName: string]: any
}
/**
 * @todo 定义当前登录用户相关信息（您应该在不同的文件中定义每个 store）
 * @param Store 是使用 defineStore() 定义的，并且它需要一个唯一名称，作为第一个参数传递（type: string）
 * @param Pinia 可以使用 store 本身的唯一id 来连接到 devtools
 * @param setup() 中调用 useStore() 之前不会创建 store
 * @member id 唯一名称
 * @member getters 通过内部常规函数获取 store 内部单个或所有信息，不可以有任何副作用，如异步请求
 * @member actions 通过内部常规函数操作 store，支持异步请求
 * @member Plugins 插件，由于是底层 API，Pania Store可以完全扩展，如向 Store 添加新属性、定义 Store 时添加新选项、为 Store 添加新方法、包装现有方法、更改甚至取消操作、实现本地存储等副作用、仅适用于特定 Store。
   插件仅适用于传递给应用后创建pinia的商店，否则将不会被应用，通过 pinia.use 传递一个普通对象或者含有一个 {store} 对象参数的函数。
 */
export const useUserStore = defineStore({
    // 当前store 的唯一 id(type: string)
    id: 'user',
    // 无论何时更改，都会将整个状态发送到本地存储(type: boolean)
    persist: true, 
    // state 是 store 的核心，可以称之为状态池
    state: (): UserState => ({
        // 登录用户信息
        userInfo: null,
        // 用户token
        token: undefined,
        // 角色权限列表
        roleList: [],
        // 登录信息是否过期
        sessionTimeout: false,
        // 最近一次登录时间（时间戳）
        lastUpdateTime: 0
    }),
    /**
     * @todo 接收“状态(state)”作为第一个参数以鼓励箭头函数的使用
     * 内部常规函数最好不要有任何副作用，比如异步请求或者更改dom
     * 如果内部常规函数使用 this 访问整个 store 实例时，需要明确设置返回数据类型
     */
    getters: {
        /**
         * 返回用户信息
         */
        getUserInfo(): any {
            return this.userInfo || {}
        },

        /**
         * 返回用户token
         */
        getToken(): string | number {
            return this.token || '';
        },
        /**
         * 查询登录信息是否过期
         * @returns 
         */
        getSessionTimeout(): boolean {
            return !!this.sessionTimeout;
        },

        /**
         * 获取最后一次登录时间
         * @returns 获取最近一次登录时间（时间戳）
         */
        getLastUpdateTime(): number {
            return this.lastUpdateTime || 0;
        }
    },
    /**
     * 支持异步操作，如 login 请求
     */
    actions: {
        /**
         *  设置当前用户登录 token
         * @param info 
         */
        setToken(info: string | undefined | number) {
            this.token = info ? info : '';
        },
        
        /**
         * 设置当前用户信息
         * @param info 
         */
        setUserInfo(info: UserInfo | null) {
            this.userInfo = info;
        },

        /**
         * 设置当前角色权限列表
         * @param roleList 
         */
        setRoleList(roleList: RoleEnum[]) {
            this.roleList = roleList;
        },

        /**
         * 设置登录信息
         * @param flag 登录信息
         */
        setSessionTimeout(flag: boolean) {
            this.sessionTimeout = flag;
        },

        /**
         * @desc 重置当前登录状态
         */
        resetState() {
            this.userInfo = null;
            this.token = '';
            this.roleList = [];
            this.sessionTimeout = false;
            router.push('/login')
        },
        confirmLoginOut() {
            this.resetState();
            // createConfirm({
            //     iconType: 'warning',
            //     title: () => '测试',
            //     content: () => '测试1',
            //     onOk: async () => {
            //       await this.resetState();
            //     },
            // });
        },
        /**
         * 可异步操作
         */
        async login(userInfo: any): Promise<GetUserInfoModel | null> {
            try {
                // const data = await loginApi(loginParams, mode); 这里可发起登录请求，成功后即可唤起白名单
                this.setUserInfo(userInfo); // 将接口中的数据放入状态池

                router.push('/')
                return userInfo; // 返回从接口中获取的用户信息，不限于token
            } catch (error) {
                return Promise.reject(error);
            }
        }
    }
})

/**
 * 需要在设置之外使用
 * @returns 返回用户状态池实例
 */
export function useUserStoreWithOut() {
    return useUserStore(stores);
}