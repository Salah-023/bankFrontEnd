import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import EditProfileView from '../views/EditProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name:'login',
      component: LoginView
    },
    {
      path :'/register',
      name :'register',
      component: RegisterView
    },
    {
      path :'/editProfile',
      name :'editProfile',
      component: EditProfileView
    }
  ]
})

export default router
