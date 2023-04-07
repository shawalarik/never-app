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
 * 路由器配置
 * @param app 应用实例
 * 创建并挂载根实例
*/
export function setupRouter(app: App<Element>) {
  app.use(router);
}