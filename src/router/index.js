import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import EditProfileView from '../views/EditProfileView.vue'
import UserListView from '../views/employeeViews/UserListView.vue'
import BankAccountListView from '../views/employeeViews/BankAccountListView.vue'
import UserList from '../components/users/UserList.vue'
import EditUser from '../components/users/EditUser.vue'

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
    },
    {
      path :'/userList',
      name :'userList',
      component: UserListView
    },
    {
      path :'/bankAccountList',
      name :'bankAccountList',
      component: BankAccountListView
    },
    {
      path :'/users',
      name :'users',
      component: UserList
    },{
      path:'/editUser/:id',
      name : 'editUser',
      component: EditUser ,
      props: true
    }
  ]
})

export default router
