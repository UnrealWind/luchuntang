import type { RouteRecordRaw } from 'vue-router';

const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/home',
    component: () => import('/@/views/home/index.vue'),
    name: 'home',
    meta: { title: '首页' },
  },
  {
    path: '/index',
    component: () => import('/@/views/index/index.vue'),
    name: 'index',
    meta: { title: 'index' },
  },
  {
    path: '/page1',
    component: () => import('/@/views/page1/index.vue'),
    name: 'page1',
    meta: { title: 'page1' },
  },
  {
    path: '/page2',
    component: () => import('/@/views/page2/index.vue'),
    name: 'page2',
    meta: { title: 'page2' },
  },
  {
    path: '/',
    name: 'Root',
    redirect: '/home',
    meta: {
      title: 'Root',
    },
  },
];

// /**
//  * 基础路由
//  * @type { *[] }
//  */
// export const constantRouterMap = [];

export default constantRoutes;
