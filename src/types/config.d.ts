/**
 * @desc 头部配置
 */
export interface HeaderSetting {
    // 背景色
    bgColor: string;
    // 固定头部
    fixed: boolean;
    // 是否显示顶部
    show: boolean;
    // 主题
    theme: ThemeEnum;
    // 显示全屏按钮
    showFullScreen: boolean;
    // 开启锁屏按钮
    useLockPage: boolean;
    // 显示文档按钮
    showDoc: boolean;
    // 显示消息中心按钮
    showNotice: boolean;
    // 显示菜单搜索按钮
    showSearch: boolean;
}

/**
 * @desc 多标签设置
 */
export interface MultiTabsSetting {
    // 刷新后是否保留已经打开的标签页
    cache: boolean;
    // 是否开启
    show: boolean;
    // 开启快速操作
    showQuick: boolean;
    // 是否可以拖拽
    canDrag: boolean;
    // 是否显示刷新按钮
    showRedo: boolean;
    // 是否显示折叠按钮
    showFold: boolean;
}

/**
 * @desc 动画设置
 */
export interface TransitionSetting {
    //  是否打开页面切换动画
    enable: boolean;
    // 内置动画类型
    basicTransition: RouterTransitionEnum;
    // 是否打开页面切换loading
    openPageLoading: boolean;
    // 是否打开页面切换顶部进度条
    openNProgress: boolean;
}

/**
 * @desc MenuSetting 菜单配置
 */
export interface MenuSetting {
    // 背景色
    bgColor: string;
    // 是否固定住菜单
    fixed: boolean;
    // 菜单折叠
    collapsed: boolean;
    // 当sider因响应性布局而隐藏
    siderHidden: boolean;
    // 是否可拖拽
    canDrag: boolean;
    // 是否显示
    show: boolean;
    // 是否隐藏
    hidden: boolean;
    // 分割菜单
    split: boolean;
    // 菜单宽度
    menuWidth: number;
    // 菜单模式
    mode: MenuModeEnum;
    // 菜单类型
    type: MenuTypeEnum;
    // 菜单主题
    theme: ThemeEnum;
    // 顶部菜单布局
    topMenuAlign: 'start' | 'center' | 'end';
    // 折叠触发器的位置
    trigger: TriggerEnum;
    // 手风琴模式，只展示一个菜单
    accordion: boolean;
    // 在路由切换的时候关闭左侧混合菜单展开菜单
    closeMixSidebarOnChange: boolean;
    // 折叠菜单时候是否显示菜单名
    collapsedShowTitle: boolean;
    // 左侧混合菜单模块切换触发方式
    mixSideTrigger: MixSidebarTriggerEnum;
    // 是否固定左侧混合菜单
    mixSideFixed: boolean;
}
/**
 * 项目配置文件
 * 用于配置项目内展示的内容、布局、文本等效果，存于localStorage中（默认存入pinia中）。
 * 如果更改了项目配置，需要手动清空 localStorage 缓存，刷新重新登录后方可生效。
 */
export interface ProjectConfig {
    /**
     * 权限缓存存放位置。默认存放于localStorage
     */
    permissionCacheType: CacheTypeEnum;

    /**
     * 是否显示配置按钮<SettingButton>
     */
    showSettingButton: boolean;

    /**
     * 是否显示主题切换按钮
     */
    showDarkModeToggle: boolean;

    /**
     * @desc 设置按钮显示位置 可选项
     * @desc SettingButtonPositionEnum.AUTO: 自动选择
     * @desc SettingButtonPositionEnum.HEADER: 位于头部
     * @desc SettingButtonPositionEnum.FIXED: 固定在右侧
     */
    settingButtonPosition: SettingButtonPositionEnum;
    
    /**
     * 权限模式,默认前端角色权限模式
     * @desc ROUTE_MAPPING 前端模式（菜单由路由生成，默认）
     * @desc ROLE：前端模式（菜单路由分开）
     * @desc BACK 后端模式
     */
    permissionMode: PermissionModeEnum;

    /**
     * 会话超时处理方案
     * @desc ROUTE_JUMP 路由跳转到登录页
     * @desc PAGE_COVERAGE 生成登录弹窗，覆盖当前页面
     */
    sessionTimeoutProcessing: SessionTimeoutProcessingEnum;

    /**
     * 网站灰色模式，用于可能悼念的日期开启
     */
    grayMode: boolean;

    /**
     * 色弱模式
     */
    colorWeak: boolean;

    /**
     * 项目主题色
     */
    themeColor: string;

    /**
     * 是否取消菜单顶部,多标签页显示, 用于可能内嵌在别的系统内
     */
    fullContent: boolean;

    /**
     * 主题内容宽度
     */
    contentMode: ContentEnum;
    
    /**
     * 是否显示logo
     */
    showLogo: boolean;

    /**
     * 是否显示底部信息 copyright
     */
    showFooter: boolean;

    /**
     * 头部配置
     */
    headerSetting: HeaderSetting;

    /**
     * 菜单设置
     */
    menuSetting: MenuSetting;

    /**
     * 多标签设置
     */
    multiTabsSetting: MultiTabsSetting;

    /**
     * 动画配置
     */
    transitionSetting: TransitionSetting;

    /**
     * 是否开启KeepAlive缓存  开发时候最好关闭,不然每次都需要清除缓存
     */
    openKeepAlive: boolean;

    /**
     * 自动锁屏时间，为0不锁屏。 单位分钟 默认1个小时
     */
    lockTime: number;

    /**
     * 是否显示面包屑
     */
    showBreadCrumb: boolean;

    /**
     * 是否显示面包屑图标
     */
    showBreadCrumbIcon: boolean;

    /**
     * 是否使用全局错误捕获
     */
    useErrorHandle: boolean;

    /**
     * 是否开启回到顶部
     */
    useOpenBackTop: boolean;

    /**
     * 是否可以嵌入iframe页面
     */
    canEmbedIFramePage: boolean;

    /**
     * 切换界面的时候是否删除未关闭的message及notify
     */
    closeMessageOnSwitch: boolean;
    
    /**
     * 切换界面的时候是否取消已经发送但是未响应的http请求。
     * 如果开启,想对单独接口覆盖。可以在单独接口设置
     */
    removeAllHttpPending: boolean;
}