
/**
 * @param 用户信息
 */
export interface UserInfo {
    userId: string | number;
    username: string;
    realName: string;
    avatar: string;
    desc?: string;
    homePath?: string;
    [propName: string]: any
}

/**
 * 当窗口缩小时，记住一些状态，并在恢复窗口时恢复这些状态
 */
export interface BeforeMiniState {
    menuCollapsed?: boolean;
    menuSplit?: boolean;
    menuMode?: MenuModeEnum;
    menuType?: MenuTypeEnum;
}