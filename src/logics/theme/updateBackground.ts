import { ConfigProvider } from "ant-design-vue";
import { setCssVar } from "~/utils";
import { useAppThemeStoreWithOut } from "~/stores/modules/appTheme";

const  APP_SYSTEM_PRESET_COLOR_LIST = '--ant-primary-color';

/**
 * 设置系统主题色 - 抽离
 * @param color 设置的颜色
 */
export function updateAppSystemBgColor(color: string) {
  const useAppTheme = useAppThemeStoreWithOut();
  useAppTheme.setThemeBgColor(color);
    setCssVar(APP_SYSTEM_PRESET_COLOR_LIST, color);
    ConfigProvider.config({
        theme: {
          primaryColor: color,
        },
    });
}