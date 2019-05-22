import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/views/Home';
import NotFound from '@/components/error-pages/NotFound';
import Login from '@/components/views/LoginPage';
import Register from '@/components/views/RegisterPage';
import Connect from '@/components/views/ConnectPage';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/connect',
      name: 'connect',
      component: Connect,
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound,
    },
  ],
});

// eslint-disable-next-line consistent-return
router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register', '/connect'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
});

export default router;
