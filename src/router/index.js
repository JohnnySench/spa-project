import { createRouter, createWebHistory } from 'vue-router'
import TheBooks from '@/views/TheBooks.vue';
import TheSignin from '@/views/TheSignin.vue';
import TheSignup from '@/views/TheSignup.vue';
import TheWords from '@/views/TheWords.vue';
import TheProfile from '@/views/TheProfile.vue'
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
