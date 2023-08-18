import type { RouteRecordRaw } from 'vue-router';

const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/home',
    component: () => import('/@/views/home/index.vue'),
    name: 'home',
    meta: { title: '首页' },
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
