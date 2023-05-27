import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import EditProfileView from '../views/EditProfileView.vue'
import BankAccountListView from '../views/employeeViews/BankAccountListView.vue'
import UserListView from '../views/employeeViews/UserListView.vue'
import EditUser from '../components/users/EditUser.vue'
import EditBankAccount from '../views/employeeViews/EditBankAccount.vue'
import CustomerDashboardView from '../views/customerViews/CustomerDashboardView.vue'

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
      path :'/bankAccountList',
      name :'bankAccountList',
      component: BankAccountListView
    }
    ,{
      path:'/editBankAccount/:id',
      name : 'editBankAccount',
      component: EditBankAccount ,
      props: true
    },
    {
      path :'/users',
      name :'users',
      component: UserListView
    },{
      path:'/editUser/:id',
      name : 'editUser',
      component: EditUser ,
      props: true
    },
    {
      path :'/customerDashboard',
      name :'customerDashboard',
      component: CustomerDashboardView
    }
  ]
})

export default router
