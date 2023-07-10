import { createRouter, createWebHistory } from 'vue-router'
import TheBooks from '@/components/TheBooks.vue';
import TheSignin from '@/components/TheSignin.vue';
import TheSignup from '@/components/TheSignup.vue';
import TheWords from '@/components/TheWords.vue';
import TheProfile from '@/components/TheProfile.vue'
const routes = [
  {
    path: '/books',
    name: 'books',
    component: TheBooks
  },
  {
    path: '/words',
    name: 'words',
    component: TheWords
  },
  {
    path: '/signup',
    name: 'signup',
    component: TheSignup
  },
  {
    path: '/signin',
    name: 'signin',
    component: TheSignin
  },
  {
    path: '/profile',
    name: 'profile',
    component: TheProfile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
