import type { RouteRecordRaw, Router } from "vue-router"

import NProgress from 'nprogress';
import getPageTitle from "~/utils/GetPageTitle";
import { useUserStoreWithOut } from "~/stores/modules/user";
import { whiteList } from "../whiteList";

export function setupRouterGuard(router: Router) {
    // router特殊处理
    createPermissionGuard(router)
}

/**
 * 注册一个全局前置守卫
 */
function createPermissionGuard(router: Router) {
  router.beforeEach(async (to, _from, next: any) => {
    NProgress.start()
    // 判断该用户是否登录(用户token)
    const userStore = useUserStoreWithOut();
    if (!userStore.getUserInfo.userId) { // 用户需要登录
      // 如果没有 Token
      if (whiteList.indexOf(to.path) !== -1) {
        // 如果在免登录的白名单中，则直接进入
        next()
      } else {
        // 其他没有访问权限的页面将被重定向到登录页面
        next("/login")
        NProgress.done()
      }
    } else {
      if (to.path === "/login") {
        // 如果已经登录，并准备进入 Login 页面，则重定向到主页
        next({ path: "/" })
        NProgress.done()
      } else {
        try {
          // 确保添加路由已完成
          next()
        } catch (err: any) {
          // 过程中发生任何错误，都直接重置 Token，并重定向到登录页面
          console.log(' "路由守卫过程发生错误"',  "路由守卫过程发生错误")
          next("/login")
          NProgress.done()
        }
      }
    }
    return true
  })

  router.afterEach((to) => {
    if (to.meta.title) {
      document.title = getPageTitle(to.meta.title || '');
    }
    NProgress.done()
  })
}