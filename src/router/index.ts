import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    children: [
    ]
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
