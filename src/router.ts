import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';

function loadView(view: string) {
  return () => import(`./pages/page${view}.vue`);
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: loadView('Home'),
  },
  {
    path: '/company',
    name: 'Company',
    component: loadView('Company'),
  },


  {
    path: '/works',
    name: 'Works',
    component: loadView('Works'),
  },

  {
    path: '/recruit',
    name: 'Recruit',
    component: loadView('Recruit'),
  },

  {
    path: '/contact',
    name: 'Contact',
    component: loadView('Contact'),
  },
];

const routerHistory = createWebHashHistory();

const router = createRouter({
  history: routerHistory,
  routes,
});

export default router;
