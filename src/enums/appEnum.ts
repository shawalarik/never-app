/**
 * @desc 主题内容宽度
 */
export enum ContentEnum {
    // auto width
    FULL = 'full',
    // fixed width
    FIXED = 'fixed',
}
/**
 * @desc 菜单主题
 */
export enum ThemeEnum {
    DARK = 'dark',
    LIGHT = 'light',
}
/**
 * @desc 内置路由切换动画类型
 */
export enum RouterTransitionEnum {
    ZOOM_FADE = 'zoom-fade',
    ZOOM_OUT = 'zoom-out',
    FADE_SIDE = 'fade-slide',
    FADE = 'fade',
    FADE_BOTTOM = 'fade-bottom',
    FADE_SCALE = 'fade-scale',
}
/**
 * @desc 设置按钮显示位置
 */
export enum SettingButtonPositionEnum {
    AUTO = 'auto',
    HEADER = 'header',
    FIXED = 'fixed',
}
/**
 * @desc 权限模式
 */
export enum PermissionModeEnum {
    // role
    // 角色权限（前端模式（菜单路由分开））
    ROLE = 'ROLE',
    // black
    // 后端
    BACK = 'BACK',
    // route mapping
    // 路由映射 (前端模式（菜单由路由生成，默认）)
    ROUTE_MAPPING = 'ROUTE_MAPPING',
}

/**
 * 会话超时处理方案
 * @desc ROUTE_JUMP 路由跳转到登录页
 * @desc PAGE_COVERAGE 生成登录弹窗，覆盖当前页面
 */
export enum SessionTimeoutProcessingEnum {
    ROUTE_JUMP,
    PAGE_COVERAGE,
}

