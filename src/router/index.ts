import { createRouter, createWebHashHistory, createWebHistory, type Router, type RouteRecordRaw } from 'vue-router'

import HomeView from '../views/HomeView.vue';
import Login from "~/views/login/index.vue"
import NProgress from 'nprogress';
import { whiteList } from './whiteList';
import type { App } from 'vue';
import { setupRouterGuard } from './guard';
import { useUserStoreWithOut } from '~/stores/modules/user';
/** 常驻路由 */
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: 'login',
    component: Login,
    meta: {
      hidden: true
    }
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  }
];
NProgress.configure({ showSpinner: false });


/**
 * 创建路由实例并传递 `routes` 配置
 * 创建一个可以被 Vue 应用程序使用的路由实例
 * createWebHashHistory: 创建哈希历史记录
 */
const router = createRouter({
  history:
    import.meta.env.VITE_ROUTER_HISTORY === "hash"
      ? createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH)
      : createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: constantRoutes
})
/**
 * 重置路由
 */
export function resetRouter() {
  // 注意：所有动态路由路由必须带有 Name 属性，否则可能会不能完全重置干净
  try {
    router.getRoutes().forEach((route) => {
      const { name, meta } = route
      if (name && meta.roles?.length) {
        router.hasRoute(name) && router.removeRoute(name)
      }
    })
  } catch (error) {
    // 强制刷新浏览器也行，只是交互体验不是很好
    window.location.reload()
  }
}

export default router

/**
 * 注册一个全局前置守卫
 */
function createPermissionGuard(router: Router) {
  router.beforeEach(async (to, _from, next) => {
    NProgress.start()
    // 判断该用户是否登录(用户token)
    const userStore = useUserStoreWithOut();
    if (!!userStore.getUserInfo && typeof userStore.getUserInfo === 'string') {
      if (to.path === "/login") {
        // 如果已经登录，并准备进入 Login 页面，则重定向到主页
        next({ path: "/" })
        NProgress.done()
      } else {
        try {
          // 确保添加路由已完成
          // 设置 replace: true, 因此导航将不会留下历史记录
          next({ ...to, replace: true })
        } catch (err: any) {
          // 过程中发生任何错误，都直接重置 Token，并重定向到登录页面
          console.log(' "路由守卫过程发生错误"',  "路由守卫过程发生错误")
          next("/login")
          NProgress.done()
        }
      }
    } else {
      // 如果没有 Token
      if (whiteList.indexOf(to.path) !== -1) {
        // 如果在免登录的白名单中，则直接进入
        next()
      } else {
        // 其他没有访问权限的页面将被重定向到登录页面
        next("/login")
        NProgress.done()
      }
    }
    return true
  })

  // router.beforeEach(async (to) => {
  //   const token = getToken()

  //   /** 没有token的情况 */
  //   if (isNullOrWhitespace(token)) {
  //     if (WHITE_LIST.includes(to.path))
  //       return true

  //     return { path: 'login', query: { ...to.query, redirect: to.path } }
  //   }

  //   /** 有token的情况 */
  //   if (to.path === '/login')
  //     return { path: '/' }

  //   refreshAccessToken()
  //   return true
  // })
}
/**
 * 路由器配置
 * @param app 应用实例
 * 创建并挂载根实例
*/
export function setupRouter(app: App<Element>) {
  // setupRouterGuard(router);
  createPermissionGuard(router);
  app.use(router);
}