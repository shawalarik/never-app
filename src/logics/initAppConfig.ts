import { updateAppSystemBgColor } from "./theme/updateBackground";
import { useAppThemeStoreWithOut } from "~/stores/modules/appTheme";

/**
 * 初始项目配置
 */
export function initAppConfigStore() {
    updateStoreAppTheme();
}

export function updateStoreAppTheme() {
    const useAppTheme = useAppThemeStoreWithOut();
    let color: string = useAppTheme.getAppThemeColor;
    updateAppSystemBgColor(color);
}