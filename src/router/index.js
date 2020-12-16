import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/about',
      component: () => import('../components/AboutPage')
    },
    {
      path: '/services',
      component: () => import('../components/ServicesPage')
    },
    {
      path: '/webinars',
      component: () => import('../components/WebinarsPage')
    },
    {
      path: '/articles',
      component: () => import('../components/ArticlesPage'),
      children: [
        {
          path: '',
          component: () => import('../components/ArticlesChoiceButtonSection')
        },
        {
          path: 'opened',
          component: () => import('../components/ArticlesListSection'),
          alias: ['closed', 'studies']
        }
      ]
    },
    {
      path: '/:catchAll(.*)',
      component: () => import('../components/NotFoundPage')
    }
  ]
});
