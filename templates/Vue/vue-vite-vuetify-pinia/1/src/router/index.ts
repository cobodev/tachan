import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      redirect: '/home',
      component: () => import('@views/MainView.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@views/HomeView.vue'),
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('@views/AboutView.vue'),
        },
        {
          path: '/components',
          name: 'components',
          component: () => import('@views/ComponentsView.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@views/LoginView.vue'),
    },
  ],
});

export default router;
