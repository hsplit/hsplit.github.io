import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/walking-horse',
      name: 'walking-horse',
      component: () => import('./views/WalkingHorse.vue'),
    },
    {
      path: '/xo',
      name: 'xo',
      component: () => import('./views/XO.vue'),
    },
    {
      path: '/fiddle',
      name: 'fiddle',
      component: () => import('./views/Fiddles.vue'),
    },
    {
      path: '/other',
      name: 'other',
      component: () => import('./views/Other.vue'),
    },
    {
      path: '/bookmarks',
      name: 'bookmarks',
      component: () => import('./views/Bookmarks.vue'),
    },
    {
      path: '/*',
      name: '404',
      component: () => import('./views/404.vue'),
    },
  ],
})
