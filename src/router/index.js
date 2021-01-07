import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import MemoriesPage from '../pages/MemoriesPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/MemoriesPage'
  },
  {
    path:'/MemoriesPage',
    component:MemoriesPage
  },
  {
    path:'/Memories/:id',
    component: () => import('../pages/MemoriesDetail.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
