import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import WebinarsPage from './components/WebinarsPage';
import ArticlesPage from './components/ArticlesPage';
import NotFoundPage from './components/NotFoundPage';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/about',
      component: AboutPage
    },
    {
      path: '/services',
      component: ServicesPage
    },
    {
      path: '/webinars',
      component: WebinarsPage
    },
    {
      path: '/articles',
      component: ArticlesPage
    },
    {
      path: '/:catchAll(.*)',
      component: NotFoundPage
    }
  ]
});
