import { prefixCls } from "~/settings/designSetting";

/**
 * 返回系统体系class名
 * @param scope 
 * @returns 
 */
export function useDesign(scope: string) {
    return {
        prefixCls: `${prefixCls}-${scope}`,
        prefixVar: prefixCls,
    };
}
