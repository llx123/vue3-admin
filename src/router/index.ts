import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    redirect: 'discover',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        path: '/discover',
        name: 'discover',
        component: () => import('@/views/discover/index.vue')
      },
      {
        path: '/music',
        name: 'music',
        component: () => import('@/views/music/index.vue')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/video/index.vue')
      },
      {
        path: '/dj',
        name: 'dj',
        component: () => import('@/views/dj/index.vue')
      }
    ]
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
})
