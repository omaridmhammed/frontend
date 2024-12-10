import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import Produits from '@/views/Produits.vue';
import Commandes from '@/components/Commandes.vue';
import Login from '@/views/Login.vue';
import Register from '../views/register.vue';
import NotFound from '@/views/NotFound.vue';
import { useAuthStore } from '../stores/authStore';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  {
    path: '/produits',
    name: 'Produits',
    component: Produits,
    meta: { requiresAuth: true },
  },
  {
    path: '/commandes',
    name: 'Commandes',
    component: Commandes,
    meta: { requiresAuth: true },
  },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard
router.beforeEach((to) => {
  const auth = useAuthStore();
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return '/login';
  }
});

export default router;
